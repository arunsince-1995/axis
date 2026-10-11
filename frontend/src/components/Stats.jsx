import React from "react";
import { motion } from "framer-motion";
import { Gem, Clock, Cog, Users } from "lucide-react";

const pillars = [
  {
    icon: Gem,
    title: "QUALITY",
    desc: ["PREMIUM FINISH", "AND ATTENTION TO DETAIL"],
  },
  {
    icon: Clock,
    title: "ON TIME",
    desc: ["TIMELY PRODUCTION", "AND DELIVERY"],
  },
  {
    icon: Cog,
    title: "IN-HOUSE",
    desc: ["FULL PRODUCTION", "FACILITY AND SKILLED TEAM"],
  },
  {
    icon: Users,
    title: "END-TO-END",
    desc: ["DESIGN, FABRICATION,", "INSTALLATION & SUPPORT"],
  },
];

const Stats = () => {
  return (
    <section
      className="relative bg-black py-20 md:py-28 border-t border-[#1a1a1a] overflow-hidden"
      data-testid="stats-section"
    >
      <div className="container-axiz">
        {/* Overline */}
        <div className="flex items-center gap-3 mb-14 md:mb-16">
          <span className="h-px w-10 bg-[#F05A26]" />
          <span className="overline text-[#F05A26] tracking-[0.3em]">WHY CHOOSE US</span>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            const hasLgBorder = i !== 0;
            const hasSmBorder = i % 2 !== 0;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`flex flex-col justify-between ${
                  hasLgBorder ? "lg:border-l lg:border-white/10 lg:pl-8 xl:pl-10" : ""
                } ${
                  hasSmBorder ? "sm:border-l sm:border-white/10 sm:pl-6" : ""
                } pr-4`}
                data-testid={`pillar-${i}`}
              >
                <div>
                  <div className="mb-6 text-[#F05A26]">
                    <Icon size={38} strokeWidth={1.6} />
                  </div>

                  <h3 className="font-display uppercase font-black text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-3xl 2xl:text-4xl tracking-tight leading-none mb-4 whitespace-nowrap">
                    <span className="text-gradient-brand font-display uppercase font-black whitespace-nowrap">{item.title}</span>
                  </h3>
                </div>

                <div className="text-xs uppercase tracking-[0.22em] text-white/60 font-semibold leading-relaxed mt-2">
                  {item.desc.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
