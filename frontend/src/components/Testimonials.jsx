import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  {
    quote:
      "AXIZ ran our regional summit like a Swiss watch. Every cue landed. Every delegate left wanting more. They are now our default production partner.",
    name: "Hala Mansour",
    role: "VP Communications, Vertex Capital",
  },
  {
    quote:
      "We've worked with the big international names. AXIZ outclassed them — sharper creative, sharper execution, and they actually answered the phone at 2am.",
    name: "Daniel Hwang",
    role: "Head of Events, Helios Tech",
  },
  {
    quote:
      "Our investor day used to be a logistics nightmare. With AXIZ it became the year's highlight reel. The audience didn't see the production — that's the point.",
    name: "Priya Raghavan",
    role: "CMO, Nexus Holdings",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
    // eslint-disable-next-line
  }, []);

  return (
    <section
      className="relative bg-[#0A0A0A] py-24 md:py-32 border-t border-[#1a1a1a] overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="container-axiz grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#F05A26]" />
            <span className="overline">Word on stage</span>
          </div>
          <h2 className="font-display uppercase font-black text-white text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
            What our <br />
            <span className="text-[#FFCB05]">clients say</span>.
          </h2>
          <div className="mt-10 flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-[#373D42] hover:border-[#F05A26] hover:text-[#F05A26] text-white/70 transition-colors"
              aria-label="Previous"
              data-testid="testimonial-prev"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-[#373D42] hover:border-[#F05A26] hover:text-[#F05A26] text-white/70 transition-colors"
              aria-label="Next"
              data-testid="testimonial-next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 relative min-h-[260px]">
          <Quote
            size={80}
            className="absolute -top-2 -left-2 text-[#FFCB05] opacity-20"
            strokeWidth={1}
          />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              data-testid={`testimonial-${i}`}
            >
              <p className="font-display uppercase text-white/95 text-2xl md:text-3xl lg:text-4xl leading-[1.15] tracking-tight font-black">
                "{items[i].quote}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-px bg-[#F05A26]" />
                <div>
                  <div className="font-bold uppercase text-white tracking-wider text-sm">
                    {items[i].name}
                  </div>
                  <div className="text-white/50 text-xs uppercase tracking-[0.25em] mt-1">
                    {items[i].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="mt-12 flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-px transition-all duration-500 ${i === idx ? "w-16 bg-[#F05A26]" : "w-8 bg-white/20"
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                data-testid={`testimonial-dot-${idx}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
