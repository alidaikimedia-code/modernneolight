"use client";

import { motion } from "motion/react";
import { Lightbulb, Store, Settings, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Neon Signs",
    desc: "Hand-crafted neon lights that capture attention and build unforgettable brand atmospheres.",
    icon: <Lightbulb size={24} />,
    link: "Explore Neon",
  },
  {
    title: "Shop Signs",
    desc: "Durable and high-impact shop signs designed to drive footfall and represent your brand identity.",
    icon: <Store size={24} />,
    link: "Retail Signs",
  },
  {
    title: "Sign Manufacturers",
    desc: "Full-scale production as specialist sign manufacturers, handling everything from design to installation.",
    icon: <Settings size={24} />,
    link: "How We Build",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-semibold text-zinc-900 tracking-tighter">
            Professional Signage Solutions
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-8 rounded-3xl border border-zinc-100 bg-[#FCFCFD] hover:border-zinc-300 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <div className="text-zinc-900">{s.icon}</div>
              </div>
              <h4 className="text-xl font-semibold text-zinc-900 mb-4 tracking-tight">
                {s.title}
              </h4>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                {s.desc}
              </p>
              <a
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-zinc-900 flex items-center gap-2"
              >
                {s.link} <ChevronRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
