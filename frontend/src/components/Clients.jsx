import React from "react";
import Marquee from "react-fast-marquee";

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

const Clients = () => {
  return (
    <section
      id="clients"
      className="relative bg-[#0A0A0A] py-20 md:py-28 border-y border-[#1a1a1a] overflow-hidden"
      data-testid="clients-section"
    >
      <div className="container-axiz mb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-10 bg-[#F05A26]" />
          <span className="overline">Trusted by</span>
        </div>
        <h2 className="font-display uppercase font-black text-white text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-3xl">
          Producing for the world's <br />
          <span className="text-gradient-brand">best agencies and brands.</span>
        </h2>
      </div>

      <Marquee speed={45} gradient gradientColor="#0A0A0A" gradientWidth={120} pauseOnHover>
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

      <Marquee speed={35} direction="right" className="mt-8" gradient gradientColor="#0A0A0A" gradientWidth={120}>
        {[...brands].reverse().map((b, i) => (
          <div key={`r-${b}-${i}`} className="mx-10 md:mx-14 flex items-center">
            <span className="font-display uppercase tracking-tight text-3xl md:text-5xl font-black text-[#373D42] hover:text-[#FFCB05] transition-colors duration-500 whitespace-nowrap">
              {b}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Clients;
