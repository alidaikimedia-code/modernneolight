"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { name: "Signage Solutions", href: "#services" },
  { name: "Neon Lights", href: "#neon" },
  { name: "Manufacturing", href: "#manufacturers" },
  { name: "Request Quote", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav h-16"
          : "bg-transparent h-20 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a
            href="#"
            className="text-zinc-900 font-display text-lg tracking-tighter font-semibold"
          >
            MODRENEON
          </a>
          <div className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-zinc-100 rounded-full px-4 py-1.5 gap-2 border border-zinc-200">
            <Search className="text-zinc-400" size={14} />
            <input
              type="text"
              placeholder="Search shop signs..."
              className="bg-transparent text-xs outline-none w-32 focus:w-40 transition-all"
            />
          </div>
          <button className="bg-zinc-900 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-all uppercase tracking-tight hidden sm:block">
            Start Project
          </button>
          <button
            className="lg:hidden text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-zinc-100 p-8 lg:hidden flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-display font-medium hover:text-zinc-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold uppercase tracking-widest text-xs">
              Start Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
