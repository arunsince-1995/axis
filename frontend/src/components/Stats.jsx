import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 320, suffix: "+", label: "Events Produced" },
  { value: 47, suffix: "", label: "Countries Activated" },
  { value: 12, suffix: "M", label: "Audience Reached" },
  { value: 98, suffix: "%", label: "Client Return Rate" },
];

const useCountUp = (target, inView, duration = 1800) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(start + (target - start) * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return n;
};

const StatItem = ({ value, suffix, label, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const n = useCountUp(value, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="border-l-2 border-[#1a1a1a] pl-6 md:pl-10"
      data-testid={`stat-${index}`}
    >
      <div className="font-display uppercase font-black text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight">
        <span className="text-gradient-brand">
          {n}
          {suffix}
        </span>
      </div>
      <div className="mt-4 text-xs md:text-sm uppercase tracking-[0.3em] text-white/60 font-semibold">
        {label}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section
      className="relative bg-black py-24 md:py-32 border-t border-[#1a1a1a] overflow-hidden grain"
      data-testid="stats-section"
    >
      <div className="container-axiz">
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-10 bg-[#F05A26]" />
          <span className="overline">By the numbers</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-6">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
