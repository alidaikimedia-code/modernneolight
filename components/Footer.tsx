"use client";

import { motion } from "motion/react";
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden mb-24"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-zinc-800 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-zinc-800 rounded-full blur-[100px] opacity-50"></div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-semibold text-white tracking-tighter mb-8 relative z-10"
          >
            Ready to light up <br />
            <span className="text-zinc-500">your business?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto relative z-10"
          >
            Contact the UK&apos;s leading <strong>sign makers</strong> for a
            free consultation on your <strong>shop signs</strong> or custom{" "}
            <strong>neon lights</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center relative z-10"
          >
            <button className="bg-white text-black px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all">
              Get a Quote
            </button>
            <button className="bg-zinc-800 text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-widest border border-zinc-700 hover:bg-zinc-700 transition-all flex items-center justify-center gap-2">
              <Phone size={16} />
              Call Specialist
            </button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-zinc-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:col-span-2"
          >
            <a
              href="#"
              className="text-zinc-900 font-display text-2xl tracking-tighter font-semibold block mb-6"
            >
              MODRENEON
            </a>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
              Premium <strong>sign manufacturers</strong> providing bespoke
              signage and <strong>neon lights</strong> to high-street brands and
              independent boutiques since 1950.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 mb-6">
              Explore
            </h6>
            <ul className="space-y-4 text-xs text-zinc-500">
              <li>
                <a href="#" className="hover:text-zinc-900">
                  Neon Signs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900">
                  Shop Signs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900">
                  Sign Manufacturers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900">
                  Portfolio
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h6 className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 mb-6">
              Connect
            </h6>
            <ul className="space-y-4 text-xs text-zinc-500">
              <li>
                <a href="#" className="hover:text-zinc-900">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900">
                  Email Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-zinc-900">
                  Location
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-zinc-50 gap-4"
        >
          <p className="text-[10px] text-zinc-400 uppercase tracking-widest">
            &copy; 2026 MODRENEON LIMITED. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] text-zinc-400 uppercase tracking-widest">
            <a href="#" className="hover:text-zinc-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-900">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
