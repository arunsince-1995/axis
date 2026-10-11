import React, { useRef, useEffect } from "react";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Adjust playback speed here
    }
  }, []);

  return (
    <div className="relative h-[100svh] bg-black">
      <section
        id="top"
        className="h-full w-full overflow-hidden bg-black grain relative"
        data-testid="hero-section"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/Stage_lights_blinking_like_show.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 stripe-bg pointer-events-none opacity-50" />

        <div className="relative z-10 container-axiz h-full flex flex-col justify-center pt-16">

          <div className="flex items-center gap-3 mb-6 md:mb-10">
            <span className="h-px w-12 bg-[#F05A26]" />
            <span className="overline text-white text-xs md:text-sm">EXHIBITION BUILDS · EVENT PRODUCTION · AV</span>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="w-full">
              <h1 className="font-display uppercase text-white leading-[0.88] text-[11vw] sm:text-[9vw] lg:text-[7vw] font-black tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block"
                >
                  DELIVERING <br />
                  EXCEPTIONAL
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="block"
                >
                  EVENTS & <br />
                  <span className="text-gradient-brand">EXHIBITIONS.</span>
                </motion.span>
              </h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 relative z-20"
            >
              <p className="text-white/80 text-base md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
                We design, build, and produce exhibitions and events — bringing structures, technology, branding, and production together under one team.
              </p>
              <div className="flex shrink-0">
                <a href="#contact" className="btn-primary-axiz text-sm md:text-base px-8 py-4" data-testid="hero-cta-primary">
                  Whatsapp Now
                  <ArrowDownRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-6 overflow-hidden hidden md:block">
            <div className="hero-ticker text-white/40 uppercase text-xs tracking-[0.35em] font-bold gap-12">
              {Array(2)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex gap-12 pr-12">
                    {[
                      "Product Launches",
                      "Conferences",
                      "Roadshows",
                      "Brand Activations",
                      "AV · Lighting · Sound",
                      "Award Nights",
                      "Shell Scheme Booths",
                      "Exhibition Booth Buildup",
                      "Mall Kiosk",
                      "3D Projection Mapping",
                      "LED & Digital Displays Rental",
                    ].map((t) => (
                      <span key={t} className="flex items-center gap-12">
                        <span>{t}</span>
                        <span className="text-[#F05A26]">◆</span>
                      </span>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

