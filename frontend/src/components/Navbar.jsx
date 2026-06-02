import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import AxizLogo from "./AxizLogo";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // Anchor href helper — if not on home, prepend "/" so it works as full path
  const a = (id) => (isHome ? `#${id}` : `/#${id}`);

  const links = [
    { label: "Work", href: a("portfolio"), isRoute: false },
    { label: "Services", href: "/services", isRoute: true },
    { label: "About", href: a("about"), isRoute: false },
    { label: "Clients", href: a("clients"), isRoute: false },
    { label: "Contact", href: a("contact"), isRoute: false },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LinkEl = ({ link, mobile = false, onClick }) => {
    const cls = mobile
      ? "text-white uppercase tracking-[0.25em] text-sm font-semibold"
      : "link-axiz text-xs uppercase tracking-[0.25em] font-semibold text-white/80 hover:text-white";
    const testId = mobile
      ? `nav-link-mobile-${link.label.toLowerCase()}`
      : `nav-link-${link.label.toLowerCase()}`;
    if (link.isRoute) {
      return (
        <Link to={link.href} onClick={onClick} className={cls} data-testid={testId}>
          {link.label}
        </Link>
      );
    }
    return (
      <a href={link.href} onClick={onClick} className={cls} data-testid={testId}>
        {link.label}
      </a>
    );
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="container-axiz flex items-center justify-between h-20">
        <Link to="/" className="text-white" data-testid="navbar-logo">
          <AxizLogo />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <LinkEl key={l.label} link={l} />
          ))}
        </nav>

        <a
          href={a("contact")}
          className="hidden md:inline-flex btn-primary-axiz"
          data-testid="navbar-cta"
        >
          Start a Project
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          data-testid="navbar-mobile-toggle"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden bg-black border-t border-[#1a1a1a]"
            data-testid="navbar-mobile-menu"
          >
            <div className="container-axiz py-6 flex flex-col gap-5">
              {links.map((l) => (
                <LinkEl key={l.label} link={l} mobile onClick={() => setOpen(false)} />
              ))}
              <a
                href={a("contact")}
                onClick={() => setOpen(false)}
                className="btn-primary-axiz self-start mt-2"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
