import React from "react";
import { Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-[#1a1a1a] overflow-hidden" data-testid="footer">
      <div className="container-axiz pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-[#1a1a1a]">
          <div className="md:col-span-5">
            <h3 className="font-display uppercase font-black text-white text-3xl md:text-4xl leading-[1] tracking-tight">
              Got a brief? <br />
              <span className="text-[#F05A26]">Let's talk production.</span>
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
            <FooterLink href="#services">Exhibition Booths</FooterLink>
            <FooterLink href="#services">Event Production</FooterLink>
            <FooterLink href="#services">AV & Technical</FooterLink>
            <FooterLink href="#services">LED & Digital Displays</FooterLink>
            <FooterLink href="#services">Brand Activations</FooterLink>
            <FooterLink href="#services">3D Projection Mapping</FooterLink>
          </FooterCol>

          <FooterCol title="Connect">
            <FooterLink href="mailto:info@axizpro.com">info@axizpro.com</FooterLink>
            <FooterLink href="tel:+97471867073">+974 71867073</FooterLink>
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
        <div className="py-14 select-none flex justify-center">
          <div className="bg-white rounded-2xl md:rounded-[2rem] p-8 md:p-12 w-full flex justify-center">
            <img 
              src="/images/Logo Orange.png" 
              alt="Axiz Logo" 
              className="w-full h-auto object-contain max-h-[250px]" 
            />
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
