import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import { ArrowDownRight, Play } from "lucide-react";

const FRAME_NAMES = Array.from(
  { length: 120 },
  (_, i) => `ezgif-frame-${String(i + 1).padStart(3, "0")}.png`
);

const Hero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const drawFrame = useCallback((progress, imgs) => {
    if (imgs.length === 0 || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    
    const frameIndex = Math.min(
      FRAME_NAMES.length - 1,
      Math.floor(progress * FRAME_NAMES.length)
    );
    
    const img = imgs[frameIndex];
    if (img && img.complete) {
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
  }, []);

  // Preload frames
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    
    FRAME_NAMES.forEach((name, index) => {
      const img = new Image();
      img.src = `/images/hero section frames/${name}`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_NAMES.length) {
          setImages(loadedImages);
        }
      };
      loadedImages[index] = img;
    });
  }, []);

  // Frame scrub event
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    drawFrame(latest, images);
  });

  // Initial draw and resize logic
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        drawFrame(scrollYProgress.get(), images);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, drawFrame, scrollYProgress]);

  // Text Reveal Animations
  const opacity1 = useTransform(smoothProgress, [0.05, 0.2], [0, 1]);
  const y1 = useTransform(smoothProgress, [0.05, 0.2], [50, 0]);
  
  const opacity2 = useTransform(smoothProgress, [0.25, 0.4], [0, 1]);
  const y2 = useTransform(smoothProgress, [0.25, 0.4], [50, 0]);
  
  const opacity3 = useTransform(smoothProgress, [0.45, 0.6], [0, 1]);
  const y3 = useTransform(smoothProgress, [0.45, 0.6], [50, 0]);

  const mainOpacity = useTransform(smoothProgress, [0.8, 1], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-black">
      <section
        id="top"
        className="sticky top-0 h-[100svh] w-full overflow-hidden bg-black grain"
        data-testid="hero-section"
      >
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 stripe-bg pointer-events-none opacity-50" />

        <motion.div style={{ opacity: mainOpacity }} className="relative z-10 container-axiz h-full flex flex-col justify-center pt-16">
          
          <div className="flex items-center gap-3 mb-6 md:mb-10">
            <span className="h-px w-12 bg-[#F05A26]" />
            <span className="overline text-white text-xs md:text-sm">Corporate Event Production · Est. 2014</span>
          </div>

          <div className="flex flex-col gap-6 md:gap-8">
            <div className="w-full">
              <h1 className="font-display uppercase text-white leading-[0.85] text-[12vw] md:text-[9vw] lg:text-[7.5vw] font-black tracking-tight">
                <motion.span style={{ opacity: opacity1, y: y1 }} className="block">
                  Engineering
                </motion.span>
                <motion.span style={{ opacity: opacity2, y: y2 }} className="block">
                  <span className="text-gradient-brand">Unforgettable</span>
                </motion.span>
                <motion.span style={{ opacity: opacity3, y: y3 }} className="block">
                  Corporate Events.
                </motion.span>
              </h1>
            </div>

            <motion.div
              style={{ opacity: opacity3, y: y3 }}
              className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 relative z-20"
            >
              <p className="text-white/80 text-base md:text-xl lg:text-2xl leading-relaxed max-w-2xl">
                From keynote stages to hybrid conferences — AXIZ engineers every detail of your corporate moment with precision, energy, and zero compromise.
              </p>
              <div className="flex shrink-0">
                <a href="#contact" className="btn-primary-axiz text-sm md:text-base px-8 py-4" data-testid="hero-cta-primary">
                  Plan an Event
                  <ArrowDownRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: opacity3 }}
            className="mt-16 border-t border-white/10 pt-6 overflow-hidden hidden md:block"
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
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
