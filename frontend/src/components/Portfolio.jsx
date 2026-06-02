import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const events = [
  {
    title: "Vertex Global Summit",
    client: "Vertex Capital",
    tags: ["Conference", "Hybrid"],
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Aurora Awards Night",
    client: "Aurora Group",
    tags: ["Gala", "Stage"],
    img: "https://images.unsplash.com/photo-1607872863060-fb85bd7229c4?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-1",
  },
  {
    title: "Helios Product Launch",
    client: "Helios Tech",
    tags: ["Activation"],
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-1",
  },
  {
    title: "Nexus Investor Day",
    client: "Nexus Holdings",
    tags: ["Keynote"],
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
    span: "md:col-span-1",
  },
  {
    title: "Orbit Hybrid Conference",
    client: "Orbit Industries",
    tags: ["Hybrid", "Broadcast"],
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80",
    span: "md:col-span-2",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative bg-black py-24 md:py-32 border-t border-[#1a1a1a]"
      data-testid="portfolio-section"
    >
      <div className="container-axiz">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#F05A26]" />
              <span className="overline">Recent Work · Selected</span>
            </div>
            <h2 className="font-display uppercase font-black text-white text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
              The stage <br />
              <span className="text-[#FFCB05]">where brands</span> arrive.
            </h2>
          </div>
          <a href="#contact" className="btn-ghost-axiz self-start">
            Request Full Deck
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[320px]">
          {events.map((e, i) => (
            <motion.a
              key={e.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative group overflow-hidden border border-[#1a1a1a] ${e.span}`}
              data-testid={`portfolio-item-${i}`}
            >
              <img
                src={e.img}
                alt={e.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[1100ms] ease-out grayscale group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Tags */}
              <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] uppercase tracking-[0.25em] font-bold text-white bg-black/60 border border-white/20 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Hover icon */}
              <div className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-[#F05A26] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowUpRight size={18} className="text-white" />
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#FFCB05] mb-2">
                  {e.client}
                </div>
                <div className="font-display uppercase font-black text-white text-xl md:text-2xl leading-tight">
                  {e.title}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
