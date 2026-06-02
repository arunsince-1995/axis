import React from "react";
import { Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-[#1a1a1a] overflow-hidden" data-testid="footer">
      <div className="container-axiz pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-[#1a1a1a]">
          <div className="md:col-span-5">
            <h3 className="font-display uppercase font-black text-white text-3xl md:text-4xl leading-[1] tracking-tight">
              Got an event <br />
              <span className="text-[#F05A26]">that matters?</span>
            </h3>
            <a href="#contact" className="btn-primary-axiz mt-8">
              Start a Project
              <ArrowUpRight size={16} />
            </a>
          </div>

          <FooterCol title="Studio">
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#portfolio">Work</FooterLink>
            <FooterLink href="#contact">Careers</FooterLink>
          </FooterCol>

          <FooterCol title="Capabilities">
            <FooterLink href="#services">Conferences</FooterLink>
            <FooterLink href="#services">Stage Design</FooterLink>
            <FooterLink href="#services">AV & Lighting</FooterLink>
            <FooterLink href="#services">Hybrid Events</FooterLink>
          </FooterCol>

          <FooterCol title="Connect">
            <FooterLink href="mailto:hello@axiz.production">hello@axiz.production</FooterLink>
            <FooterLink href="tel:+971000000000">+971 000 0000</FooterLink>
            <div className="flex gap-3 mt-2">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-[#373D42] hover:border-[#F05A26] hover:text-[#F05A26] flex items-center justify-center text-white/70 transition-colors"
                  data-testid={`footer-social-${i}`}
                  aria-label="Social link"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </FooterCol>
        </div>

        {/* Massive brand text */}
        <div className="py-14 select-none">
          <div className="font-display text-[24vw] md:text-[18vw] leading-[0.8] font-black tracking-tighter text-transparent uppercase"
            style={{
              WebkitTextStroke: "1px #1f1f1f",
              backgroundImage: "linear-gradient(180deg, #111 0%, #000 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            AXIZ
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-white/40 text-xs uppercase tracking-[0.25em]">
          <span>© {new Date().getFullYear()} AXIZ Production. All rights reserved.</span>
          <span>Crafted for brands that demand presence.</span>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, children }) => (
  <div className="md:col-span-2">
    <div className="text-xs uppercase tracking-[0.3em] text-[#F05A26] font-bold mb-5">
      {title}
    </div>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="link-axiz text-sm text-white/80 hover:text-white uppercase tracking-wider"
    >
      {children}
    </a>
  </li>
);

export default Footer;
