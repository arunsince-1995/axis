import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowDownLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const SERVICES = [
  {
    title: "Exhibition Booths & Shell Schemes",
    tagline: "Custom Booth Construction · Shell Scheme Booths · Exhibition Build-Up",
    desc: "Bespoke exhibition stands, custom booth fabrication, and modular shell scheme builds designed for impact, traffic flow, and seamless on-site assembly.",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Event Production",
    tagline: "Product Launches · Conferences · Award Nights",
    desc: "Full-scale corporate event production — from high-energy keynote stages to prestigious gala nights and global product reveals.",
    images: [
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "AV & Technical Production",
    tagline: "Professional Audio · Lighting · Sound Systems · Technical Support",
    desc: "Touring-grade sound systems, intelligent lighting rigs, and certified audiovisual technicians ensuring flawless live execution.",
    images: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "LED & Digital Displays",
    tagline: "LED Screen Rental · Digital Displays · Video Walls",
    desc: "High-resolution indoor and outdoor LED screen rentals, seamless curved video walls, and high-brightness digital display installations.",
    images: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Brand Activations & Roadshows",
    tagline: "Brand Experiences · Promotional Activations · Roadshows",
    desc: "Interactive brand spaces, multi-stop nationwide roadshows, and immersive pop-ups designed to engage consumers and generate viral reach.",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Mall Kiosks & Retail Displays",
    tagline: "Custom Kiosks · Promotional Counters · Retail Installations",
    desc: "Eye-catching mall kiosks, luxury retail fixtures, and durable promotional counters engineered for high-traffic public venues.",
    images: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "3D Projection Mapping",
    tagline: "Architectural Mapping · Immersive Visuals · Projection Experiences",
    desc: "Turn iconic facades, indoor sets, and physical structures into dynamic, animated spectacles with high-lumen laser projection mapping.",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499415479124-43c32433a620?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Event Branding & Signage",
    tagline: "Event Graphics · Backdrops · Signage · Branding Production",
    desc: "End-to-end event branding solutions including media walls, directional wayfinding, custom stage backdrops, and precision graphic fabrication.",
    images: [
      "https://images.unsplash.com/photo-1607872863060-fb85bd7229c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485872299712-1b54b0a26d97?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="App bg-black text-white min-h-screen" data-testid="services-page">
      <Navbar />
      <ServicesHero />
      <ServicesIntro />
      <div>
        {SERVICES.map((s, i) => (
          <ServiceBlock key={s.title} index={i} {...s} />
        ))}
      </div>
      <CTABanner />
      <Footer />
    </div>
  );
};

/* ---------- Hero ---------- */
const ServicesHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-black grain pt-32 pb-20" data-testid="services-hero">
      {/* Background lights */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 stripe-bg" />
      </div>

      <div className="relative container-axiz w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/60 hover:text-[#F05A26] transition-colors"
            data-testid="services-back-home"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <span className="text-white/30">·</span>
          <span className="overline">Services</span>
        </motion.div>

        <h1 className="font-display uppercase text-white leading-[0.95] sm:leading-[0.85] text-4xl sm:text-6xl md:text-[8vw] lg:text-[6.5vw] font-black tracking-tight max-w-full break-words">
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.83, 0, 0.17, 1] }}
            className="block"
          >
            Designing your next
          </motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.83, 0, 0.17, 1] }}
            className="block text-gradient-brand"
          >
            unforgettable
          </motion.span>
          <motion.span
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="block"
          >
            experience.
          </motion.span>
        </h1>
      </div>
    </section>
  );
};

/* ---------- Intro ---------- */
const ServicesIntro = () => {
  return (
    <section className="relative bg-black py-20 md:py-28 border-t border-[#1a1a1a]">
      <div className="container-axiz grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#F05A26]" />
            <span className="overline">What we do</span>
          </div>
        </div>
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display uppercase font-black text-white text-2xl md:text-3xl lg:text-4xl leading-[1.15] tracking-tight"
          >
            We craft{" "}
            <span className="text-[#FFCB05]">"unforgettable experiences"</span>,
            turning bold ideas into immersive, high-energy corporate moments
            that captivate audiences locally and globally. Every experience is
            designed to spark{" "}
            <span className="text-[#F05A26]">excitement</span>, connect people,
            and leave a lasting memory.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

/* ---------- Service Block ---------- */
const ServiceBlock = ({ title, tagline, desc, images, index }) => {
  const isMobile = useIsMobile();
  const containerRef = useRef(null);
  const isAccent = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);

  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);

  const transforms = [
    { opacity: opacity1, y: y1 },
    { opacity: opacity2, y: y2 },
    { opacity: opacity3, y: y3 },
    { opacity: opacity4, y: y4 },
  ];

  return (
    <div
      ref={containerRef}
      className={isMobile ? "relative" : "relative h-[250vh]"}
    >
      <section
        className={`flex flex-col justify-between py-10 md:py-12 border-t border-[#1a1a1a] overflow-hidden ${
          isAccent ? "bg-[#0A0A0A]" : "bg-black"
        } ${isMobile ? "relative min-h-0" : "sticky top-0 h-[100svh]"}`}
        data-testid={`service-block-${index}`}
      >
        <div className="container-axiz h-full flex flex-col justify-between max-h-full">
          {/* Top Header */}
          <div className="flex justify-between items-start shrink-0 mb-6 gap-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display uppercase font-black text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] md:leading-none"
            >
              {title}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/20 md:border-2 flex items-center justify-center text-white shrink-0 hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              <ArrowDownLeft className="w-5 h-5 md:w-6 md:h-6" /> 
            </motion.div>
          </div>

          {/* Middle Images */}
          <div className="flex-1 min-h-0 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 my-6 md:my-0">
            {images.map((src, i) => (
              <motion.div
                key={i}
                style={!isMobile ? { opacity: transforms[i].opacity, y: transforms[i].y } : undefined}
                initial={isMobile ? { opacity: 0, y: 20 } : undefined}
                whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                viewport={isMobile ? { once: true } : undefined}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden rounded-md border border-[#1a1a1a]"
              >
                <ImgTile src={src} />
              </motion.div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="flex justify-between items-end mt-6 shrink-0 gap-4">
            <div className="max-w-2xl pr-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#F05A26] text-xs font-bold uppercase tracking-[0.15em] mb-3"
              >
                {tagline}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/80 text-base md:text-2xl font-medium leading-snug md:leading-tight"
              >
                {desc}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-black text-5xl md:text-8xl lg:text-[10rem] text-white/10 tracking-tighter leading-none shrink-0"
            >
              ({String(index + 1).padStart(2, "0")})
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ImgTile = ({ src }) => (
  <div className="relative w-full h-full group cursor-pointer overflow-hidden">
    <img
      src={src}
      alt=""
      className="absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
  </div>
);

/* ---------- CTA Banner ---------- */
const CTABanner = () => {
  return (
    <section className="relative bg-black py-24 md:py-32 border-t border-[#1a1a1a] overflow-hidden">
      <div className="container-axiz text-center max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-[#F05A26]" />
          <span className="overline">Stay in the loop</span>
          <span className="h-px w-10 bg-[#F05A26]" />
        </div>
        <h3 className="font-display uppercase font-black text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
          Got a moment <br />
          <span className="text-gradient-brand">worth building?</span>
        </h3>
        <p className="text-white/60 max-w-xl mx-auto mt-8 text-base md:text-lg">
          Tell us where you want your audience to be in twelve months. We'll design the event that gets them there.
        </p>
        <a href="/#contact" className="btn-primary-axiz mt-10" data-testid="services-cta-bottom">
          Brief Our Producers
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default ServicesPage;
