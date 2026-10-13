import React from "react";
import Marquee from "react-fast-marquee";
import { Globe, Building2, Handshake, MapPin } from "lucide-react";

const brands = [
  "ARAMCO",
  "EMIRATES",
  "MICROSOFT",
  "L'OREAL",
  "HSBC",
  "PEPSI",
  "ADIDAS",
  "MERCEDES",
  "DELOITTE",
  "ROLEX",
  "SAMSUNG",
  "GOLDMAN",
];

const pillars = [
  {
    icon: Globe,
    title: "INTERNATIONAL",
    subtitle: "AGENCIES & BRANDS",
  },
  {
    icon: Building2,
    title: "QATAR'S LOCAL COMPANIES",
    subtitle: "BEST PRODUCTION PARTNER",
  },
  {
    icon: Handshake,
    title: "SAME COMMITMENT",
    subtitle: "FOR EVERY CLIENT",
  },
];

const Clients = () => {
  return (
    <section
      id="clients"
      className="relative bg-black py-20 md:py-28 border-y border-[#1a1a1a] overflow-hidden"
      data-testid="clients-section"
    >
      {/* Background Satellite Map with Precise Qatar Pin & Label */}
      <div className="absolute top-0 right-0 h-full w-full lg:w-[60%] xl:w-[54%] pointer-events-none select-none overflow-hidden">
        <img
          src="/images/qatar-map-with-pin.png"
          alt="Qatar Regional Presence"
          className="w-full h-full object-cover object-center lg:object-right opacity-50 lg:opacity-90 mix-blend-screen scale-105"
        />
        {/* Soft edge gradients so map blends seamlessly into pure black */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 lg:via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container-axiz relative z-10 mb-16 md:mb-20">
        {/* Overline / Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-8 md:w-10 bg-[#F05A26]" />
          <span className="overline tracking-[0.3em] text-[#F05A26] font-bold text-xs md:text-sm">
            TRUSTED BY
          </span>
        </div>

        {/* Headline matching mockup typography */}
        <h2 className="font-display uppercase font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] tracking-tight max-w-4xl mb-12 md:mb-16">
          PRODUCING FOR THE WORLD'S <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A26] via-[#F58220] to-[#FFCB05]">
            BEST AGENCIES AND BRANDS.
          </span>
        </h2>

        {/* 3 Pillars / Value Props - strictly 2 lines each */}
        <div className="flex flex-col md:flex-row md:items-start border-t border-white/10 md:border-t-0 pt-6 md:pt-0 gap-6 md:gap-0 w-fit max-w-full">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col gap-3.5 ${
                  idx === 0
                    ? "md:pr-8 lg:pr-10"
                    : idx === 1
                    ? "md:px-8 lg:px-10 md:border-x md:border-white/15"
                    : "md:pl-8 lg:pl-10"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-start text-[#F05A26]">
                  <Icon size={28} strokeWidth={1.75} />
                </div>
                <div className="whitespace-nowrap">
                  <h4 className="font-display font-bold text-white text-[11px] sm:text-xs md:text-[13px] tracking-[0.14em] uppercase leading-tight whitespace-nowrap">
                    {item.title}
                  </h4>
                  <p className="font-display font-medium text-white/60 text-[11px] sm:text-xs md:text-[13px] tracking-[0.14em] uppercase leading-tight mt-1 whitespace-nowrap">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scrolling Brand Logos Marquee */}
      <div className="relative z-10 pt-4 border-t border-white/5">
        <Marquee speed={45} gradient gradientColor="#000000" gradientWidth={120} pauseOnHover>
          {brands.map((b, i) => (
            <div
              key={`${b}-${i}`}
              className="mx-10 md:mx-14 flex items-center"
              data-testid={`client-logo-${i}`}
            >
              <span className="font-display uppercase tracking-tight text-4xl md:text-6xl font-black text-white/30 hover:text-white transition-colors duration-500 whitespace-nowrap">
                {b}
              </span>
            </div>
          ))}
        </Marquee>

        <Marquee speed={35} direction="right" className="mt-8" gradient gradientColor="#000000" gradientWidth={120} pauseOnHover>
          {[...brands].reverse().map((b, i) => (
            <div key={`r-${b}-${i}`} className="mx-10 md:mx-14 flex items-center">
              <span className="font-display uppercase tracking-tight text-3xl md:text-5xl font-black text-[#373D42] hover:text-[#FFCB05] transition-colors duration-500 whitespace-nowrap">
                {b}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Clients;
