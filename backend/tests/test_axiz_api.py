"""Backend tests for AXIZ Production API"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://animated-events-hub.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root health ---
class TestRoot:
    def test_root_ok(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "message" in data


# --- Status endpoint (legacy) ---
class TestStatus:
    def test_create_and_list_status(self, client):
        payload = {"client_name": f"TEST_{uuid.uuid4().hex[:8]}"}
        r = client.post(f"{API}/status", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["client_name"] == payload["client_name"]
        assert "id" in data and "timestamp" in data

        r2 = client.get(f"{API}/status")
        assert r2.status_code == 200
        rows = r2.json()
        assert isinstance(rows, list)
        assert any(x.get("client_name") == payload["client_name"] for x in rows)


# --- Contact submissions ---
class TestContact:
    def test_create_contact_full_payload(self, client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"Tester {unique}",
            "email": f"{unique}@example.com",
            "company": "AXIZ QA Co",
            "event_type": "Conference",
            "message": "We need a 500-person product launch in Q3.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["company"] == payload["company"]
        assert data["event_type"] == payload["event_type"]
        assert data["message"] == payload["message"]
        assert "id" in data and "created_at" in data

        # Verify persistence via GET
        r2 = client.get(f"{API}/contact")
        assert r2.status_code == 200
        rows = r2.json()
        assert isinstance(rows, list) and len(rows) >= 1
        match = [x for x in rows if x.get("email") == payload["email"]]
        assert match, "Submission not found in GET /api/contact"

    def test_create_contact_minimum_required(self, client):
        unique = f"TEST_{uuid.uuid4().hex[:8]}"
        payload = {
            "name": f"Min {unique}",
            "email": f"{unique}@example.com",
            "message": "Minimum valid payload for testing.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 201, r.text
        d = r.json()
        assert d["company"] is None
        assert d["event_type"] is None

    def test_reject_invalid_email(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "Bad Email", "email": "not-an-email", "message": "Hello there friend"
        })
        assert r.status_code == 422

    def test_reject_missing_name(self, client):
        r = client.post(f"{API}/contact", json={
            "email": "ok@example.com", "message": "Hello there friend"
        })
        assert r.status_code == 422

    def test_reject_missing_email(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "Someone", "message": "Hello there friend"
        })
        assert r.status_code == 422

    def test_reject_missing_message(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "Someone", "email": "ok@example.com"
        })
        assert r.status_code == 422

    def test_reject_short_message(self, client):
        r = client.post(f"{API}/contact", json={
            "name": "Someone", "email": "ok@example.com", "message": "hi"
        })
        assert r.status_code == 422

    def test_list_sorted_desc(self, client):
        # Create two with small gap; ensure newest first
        import time
        u1 = f"TEST_{uuid.uuid4().hex[:8]}"
        client.post(f"{API}/contact", json={
            "name": f"A {u1}", "email": f"a_{u1}@example.com", "message": "First submission for sort test."
        })
        time.sleep(1.1)
        u2 = f"TEST_{uuid.uuid4().hex[:8]}"
        client.post(f"{API}/contact", json={
            "name": f"B {u2}", "email": f"b_{u2}@example.com", "message": "Second submission for sort test."
        })
        r = client.get(f"{API}/contact?limit=50")
        assert r.status_code == 200
        rows = r.json()
        emails = [x["email"] for x in rows]
        # second should appear before first in list
        assert emails.index(f"b_{u2}@example.com") < emails.index(f"a_{u1}@example.com")
