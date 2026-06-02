import React from "react";
import { motion } from "framer-motion";
import { Mic2, Lightbulb, Speaker, Building2, Calendar, Camera } from "lucide-react";

const services = [
  {
    icon: Mic2,
    title: "Keynote & Conference",
    desc: "End-to-end production for keynotes, summits and shareholder events — staging, run-of-show, content systems.",
    span: "md:col-span-2",
  },
  {
    icon: Lightbulb,
    title: "Stage Design",
    desc: "Bespoke set builds, scenic engineering and brand-led environments.",
    span: "md:col-span-1",
  },
  {
    icon: Speaker,
    title: "AV · Lighting · Sound",
    desc: "Concert-grade rigs sized for boardrooms to ballrooms.",
    span: "md:col-span-1",
  },
  {
    icon: Calendar,
    title: "Hybrid & Virtual",
    desc: "Multi-cam broadcast studios, live streams and audience interaction layers.",
    span: "md:col-span-2",
  },
  {
    icon: Building2,
    title: "Brand Activations",
    desc: "Pop-ups, launches and immersive brand worlds that travel with you.",
    span: "md:col-span-2",
  },
  {
    icon: Camera,
    title: "Content & Coverage",
    desc: "Cinematic event films, photo and same-day social edits.",
    span: "md:col-span-1",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-[#0A0A0A] py-24 md:py-32 border-t border-[#1a1a1a] overflow-hidden"
      data-testid="services-section"
    >
      <div className="container-axiz">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#F05A26]" />
              <span className="overline">Capabilities · 01—06</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display uppercase font-black text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight"
            >
              Built for <span className="text-gradient-brand">brands</span> <br />
              who don't repeat themselves.
            </motion.h2>
          </div>
          <p className="text-white/60 max-w-sm text-base">
            Six core disciplines, one production team. Engage one or all — we'll architect the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`group relative bg-black border border-[#1f1f1f] hover:border-[#F05A26] p-8 md:p-10 transition-all duration-500 overflow-hidden ${s.span}`}
                data-testid={`service-card-${idx}`}
              >
                {/* Accent corner with Icon */}
                <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 border-l border-b border-[#1f1f1f] group-hover:border-[#F05A26] transition-colors flex items-center justify-center">
                  <Icon
                    size={24}
                    className="text-white/40 group-hover:text-[#FFCB05] transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="mb-12">
                  <span className="font-display text-[#373D42] group-hover:text-[#F05A26] transition-colors text-3xl font-black">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-display uppercase text-2xl md:text-3xl font-black text-white mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {s.desc}
                </p>

                {/* Hover line */}
                <div className="mt-8 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#F05A26] to-[#FFCB05] transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
