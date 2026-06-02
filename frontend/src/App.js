import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServicesPage from "./pages/ServicesPage";

const Landing = () => {
  useEffect(() => {
    document.title = "AXIZ Production — Corporate Event Production";
  }, []);

  return (
    <div className="App bg-black text-white" data-testid="landing-page">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Clients />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="dark"
        toastOptions={{
          style: {
            background: "#0A0A0A",
            border: "1px solid #373D42",
            color: "#fff",
            borderRadius: "0",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
