import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SERVICES = [
  {
    title: "Keynote Conferences",
    tagline: "Iconic corporate moments",
    desc: "We architect flagship conferences and summits — staging, run-of-show, content systems and crew — turning your annual moment into a global signal.",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Hybrid & Broadcast",
    tagline: "Seamless live experiences",
    desc: "Multi-cam broadcast studios, live streaming, and audience interaction layers that erase the line between in-room and online.",
    images: [
      "https://images.unsplash.com/photo-1551817958-d9d86fb29431?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Stage & Set Design",
    tagline: "Brand-led environments",
    desc: "Bespoke set builds and scenic engineering — from intimate fireside formats to 30-metre LED hero stages — designed to read on camera and IRL.",
    images: [
      "https://images.unsplash.com/photo-1607872863060-fb85bd7229c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1485872299712-1b54b0a26d97?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Immersive Productions",
    tagline: "Beyond the stage",
    desc: "We turn venues into multi-sensory environments — projection mapping, spatial audio and interactive layers that pull your audience into the story.",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499415479124-43c32433a620?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "AV · Lighting · Sound",
    tagline: "Concert-grade precision",
    desc: "Touring-grade rigs scaled for boardroom to ballroom. Premium lighting design, line-array audio and broadcast-ready vision mixing under one crew.",
    images: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Event Management",
    tagline: "From concept to execution",
    desc: "End-to-end producers managing every detail — venue, vendors, logistics, hospitality and on-site coordination — so your team can stay on message.",
    images: [
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Marketing & Sponsorship",
    tagline: "Amplifying reach, unlocking value",
    desc: "Integrated campaigns and sponsorship strategy that maximise visibility, attendance and post-event content value across owned and earned channels.",
    images: [
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Content & Coverage",
    tagline: "Same-day storytelling",
    desc: "Cinematic event films, photo coverage, and same-day social edits — broadcasting your moment while the room is still buzzing.",
    images: [
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
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

        <h1 className="font-display uppercase text-white leading-[0.85] text-[13vw] md:text-[9vw] lg:text-[6.5vw] font-black tracking-tight">
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const yRight = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const isAccent = index % 2 === 1;

  return (
    <section
      ref={ref}
      className={`relative py-24 md:py-32 border-t border-[#1a1a1a] overflow-hidden ${
        isAccent ? "bg-[#0A0A0A]" : "bg-black"
      }`}
      data-testid={`service-block-${index}`}
    >
      <div className="container-axiz">
        {/* Header row */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-display text-3xl md:text-4xl font-black text-[#F05A26]">
                ({String(index + 1).padStart(2, "0")})
              </span>
              <span className="h-px flex-1 max-w-[120px] bg-[#373D42]" />
              <span className="overline">{tagline}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8 }}
              className="font-display uppercase font-black text-white leading-[0.9] text-5xl md:text-6xl lg:text-7xl tracking-tight"
            >
              {title}
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white/70 text-base md:text-lg leading-relaxed"
            >
              {desc}
            </motion.p>
            <motion.a
              href="/#contact"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="link-axiz inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] font-bold text-white hover:text-[#F05A26] transition-colors self-start"
            >
              Enquire <ArrowUpRight size={14} />
            </motion.a>
          </div>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <motion.div style={{ y: yLeft }} className="col-span-7 md:col-span-5 aspect-[4/5] overflow-hidden border border-[#1a1a1a]">
            <ImgTile src={images[0]} />
          </motion.div>
          <div className="col-span-5 md:col-span-7 flex flex-col gap-3 md:gap-5">
            <motion.div style={{ y: yRight }} className="flex-1 aspect-[16/9] overflow-hidden border border-[#1a1a1a]">
              <ImgTile src={images[1]} />
            </motion.div>
            <div className="grid grid-cols-2 gap-3 md:gap-5 flex-1">
              <div className="aspect-[4/3] overflow-hidden border border-[#1a1a1a]">
                <ImgTile src={images[2]} />
              </div>
              <div className="aspect-[4/3] overflow-hidden border border-[#1a1a1a]">
                <ImgTile src={images[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
