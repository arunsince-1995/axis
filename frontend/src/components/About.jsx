import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ABOUT_IMG =
  "https://static.prod-images.emergentagent.com/jobs/a6a7cb56-1198-4bc5-b728-ce9bef106cca/images/840ab8357c1f30ea110e80dfcd437d15c361df897600772ca52f5606762e0729.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black py-24 md:py-32 overflow-hidden"
      data-testid="about-section"
    >
      <div className="container-axiz grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Left text */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-[#F05A26]" />
            <span className="overline">About AXIZ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display uppercase font-black text-white leading-[0.9] text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            THE SHOW <br />
            IS WHAT YOU SEE. <br />
            <span className="text-gradient-brand">PRODUCTION</span> IS WHAT WE DO.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-10 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed space-y-5"
          >
            <p>Every exhibition booth, stage, screen, and structure is built on a thousand details.</p>
            <p>AXIZ takes care of every detail — from fabrication and AV production to installation, technical execution, and show-day operations.</p>
            <p>You see the result. We know the build.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a href="#services" className="btn-primary-axiz" data-testid="about-cta">
              Explore Services
              <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost-axiz">
              Talk to Us
            </a>
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={ABOUT_IMG}
              alt="AXIZ team backstage at corporate event"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          {/* Floating stat */}
          <div className="absolute -bottom-8 -left-8 bg-[#F05A26] text-white p-6 hidden md:block max-w-[220px]">
            <div className="text-[10px] uppercase tracking-[0.2em] mb-2 font-bold leading-tight text-white/90">
              Powered by a team with
            </div>
            <div className="font-display text-5xl font-black leading-none">10+</div>
            <div className="text-xs uppercase tracking-[0.25em] mt-2 font-bold leading-tight">
              Years of <br /> experience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
