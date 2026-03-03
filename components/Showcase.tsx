"use client";

import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "Bespoke LED Shop Sign",
    img: "/wd-main-product-img-2.png",
  },
  {
    title: "Custom Neon Lights",
    img: "/wd-home-services-image-2.png",
  },
  {
    title: "Luxury Retail Signs",
    img: "/wd-home-services-image-3.png",
  },
  {
    title: "Architectural Lighting",
    img: "/wd-main-product-img-3.webp",
  },
];

export default function Showcase() {
  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-zinc-900 tracking-tighter leading-tight">
              Illuminating the UK&apos;s <br />
              Most Prestigious Brands.
            </h2>
          </div>
          <div className="text-right">
            <p className="text-sm text-zinc-400 mb-4 uppercase tracking-widest">
              Global Portfolio
            </p>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <ChevronLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden relative group cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                <p className="text-white text-xs font-medium uppercase tracking-widest">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
