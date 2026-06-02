import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";

const HERO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/a6a7cb56-1198-4bc5-b728-ce9bef106cca/images/2fe63e7a586161792b65d7d6d8852840429efbf4ea3ef2761eac3b474e71d190.png";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-black grain"
      data-testid="hero-section"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.83, 0, 0.17, 1] }}
        className="absolute inset-0"
      >
        <img
          src={HERO_IMG}
          alt="AXIZ Production corporate event stage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black" />
        <div className="absolute inset-0 stripe-bg" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-axiz min-h-screen flex flex-col justify-end pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-12 bg-[#F05A26]" />
          <span className="overline">Corporate Event Production · Est. 2014</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display uppercase text-white leading-[0.85] text-[13vw] md:text-[9vw] lg:text-[7vw] font-black tracking-tight">
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
                className="block"
              >
                Engineering
              </motion.span>
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
                className="block"
              >
                <span className="text-gradient-brand">Unforgettable</span>
              </motion.span>
              <motion.span
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
                className="block"
              >
                Corporate Events.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="lg:col-span-4 flex flex-col gap-6 relative z-20 bg-black/30 backdrop-blur-sm p-6 lg:bg-transparent lg:backdrop-blur-0 lg:p-0"
          >
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-sm">
              From keynote stages to hybrid conferences — AXIZ engineers every detail of your corporate moment with precision, energy, and zero compromise.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary-axiz" data-testid="hero-cta-primary">
                Plan an Event
                <ArrowDownRight size={16} />
              </a>
              <a href="#portfolio" className="btn-ghost-axiz" data-testid="hero-cta-secondary">
                <Play size={14} fill="currentColor" />
                See Reel
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 border-t border-white/10 pt-6 overflow-hidden"
        >
          <div className="hero-ticker text-white/40 uppercase text-xs tracking-[0.35em] font-bold gap-12">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex gap-12 pr-12">
                  {[
                    "Keynote Stages",
                    "Hybrid Conferences",
                    "Brand Activations",
                    "AV · Lighting · Sound",
                    "Awards Nights",
                    "Product Launches",
                    "Investor Summits",
                  ].map((t) => (
                    <span key={t} className="flex items-center gap-12">
                      <span>{t}</span>
                      <span className="text-[#F05A26]">◆</span>
                    </span>
                  ))}
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
