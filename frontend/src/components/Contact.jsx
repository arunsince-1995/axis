import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    event_type: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    try {
      setStatus("loading");
      await axios.post(`${API}/contact`, form);
      setStatus("success");
      toast.success("Brief received. Our producers will reach out within 24h.");
      setForm({ name: "", email: "", company: "", event_type: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      toast.error("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-black py-24 md:py-32 border-t border-[#1a1a1a] overflow-hidden grain"
      data-testid="contact-section"
    >
      <div className="container-axiz grid lg:grid-cols-12 gap-14 lg:gap-20">
        {/* Left */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#F05A26]" />
            <span className="overline">Brief us</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display uppercase font-black text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight"
          >
            Let's build <br />
            your next <br />
            <span className="text-gradient-brand">moment.</span>
          </motion.h2>

          <div className="mt-12 space-y-6 text-white/80">
            <a href="mailto:hello@axiz.production" className="flex items-center gap-4 group" data-testid="contact-email">
              <span className="w-10 h-10 border border-[#373D42] group-hover:border-[#F05A26] flex items-center justify-center transition-colors">
                <Mail size={16} />
              </span>
              <span className="link-axiz uppercase tracking-[0.15em] text-sm">
                info@axizpro.com
              </span>
            </a>
            <a href="tel:+971000000000" className="flex items-center gap-4 group" data-testid="contact-phone">
              <span className="w-10 h-10 border border-[#373D42] group-hover:border-[#F05A26] flex items-center justify-center transition-colors">
                <Phone size={16} />
              </span>
              <span className="link-axiz uppercase tracking-[0.15em] text-sm">
                +974 71867073
              </span>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 border border-[#373D42] flex items-center justify-center">
                <MapPin size={16} />
              </span>
              <span className="uppercase tracking-[0.15em] text-sm text-white/70">
                Qatar-Riyad-Europe
              </span>
            </div>
          </div>
        </div>

        {/* Right form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7 space-y-8"
          data-testid="contact-form"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Field
              label="Your name *"
              name="name"
              value={form.name}
              onChange={handleChange}
              testId="contact-input-name"
            />
            <Field
              label="Email *"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              testId="contact-input-email"
            />
            <Field
              label="Company"
              name="company"
              value={form.company}
              onChange={handleChange}
              testId="contact-input-company"
            />
            <Field
              label="Event type"
              name="event_type"
              value={form.event_type}
              onChange={handleChange}
              placeholder="Conference, launch, awards…"
              testId="contact-input-event-type"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.25em] text-white/50 mb-2">
              Tell us about it *
            </label>
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#373D42] text-white py-3 focus:outline-none focus:border-[#F05A26] transition-colors placeholder-[#555] resize-none"
              placeholder="Audience size, location, dates, ambition…"
              data-testid="contact-input-message"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-4">
            <p className="text-white/40 text-xs uppercase tracking-[0.2em] max-w-sm">
              We typically respond within one business day, with our production team ready to discuss your project.
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary-axiz disabled:opacity-60"
              data-testid="contact-submit"
            >
              {status === "loading" && <Loader2 size={16} className="animate-spin" />}
              {status === "success" && <Check size={16} />}
              {status === "success" ? "Sent" : "Send Brief"}
              {status !== "success" && status !== "loading" && <ArrowUpRight size={16} />}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

const Field = ({ label, testId, ...props }) => (
  <div>
    <label className="block text-xs uppercase tracking-[0.25em] text-white/50 mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full bg-transparent border-b border-[#373D42] text-white py-3 focus:outline-none focus:border-[#F05A26] transition-colors placeholder-[#555]"
      data-testid={testId}
    />
  </div>
);

export default Contact;
