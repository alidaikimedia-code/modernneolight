"use client";

import { motion } from "motion/react";
import { Award, Truck, Palette } from "lucide-react";
import Image from "next/image";

const reasons = [
  {
    title: "In-House Manufacturing",
    desc: "Unlike brokers, we are direct sign manufacturers. We control the quality from the first sketch to the final polish.",
    icon: <Award size={24} />,
  },
  {
    title: "Nationwide Installation",
    desc: "Our expert sign makers travel across the UK to ensure your shop signs are installed to perfection.",
    icon: <Truck size={24} />,
  },
  {
    title: "Bespoke Design Studio",
    desc: "We specialize in custom neon signs that are safe, durable, and energy-efficient using modern LED technology.",
    icon: <Palette size={24} />,
  },
];

export default function Trust() {
  return (
    <section
      id="manufacturers"
      className="py-24 px-6 bg-zinc-50 border-y border-zinc-100"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6 block">
              Why Choose Us
            </span>
            <h3 className="text-4xl font-display font-semibold text-zinc-900 tracking-tighter mb-8 leading-tight">
              Master Sign Makers <br />
              with 70+ Years Experience.
            </h3>
          </motion.div>

          <div className="grid gap-8">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6"
              >
                <div className="mt-1 flex-shrink-0 text-zinc-900">{r.icon}</div>
                <div>
                  <h5 className="text-zinc-900 font-semibold mb-2">
                    {r.title}
                  </h5>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-2xl border border-zinc-100 subtle-shadow text-center"
            >
              <div className="text-3xl font-display font-semibold text-zinc-900 mb-1">
                500+
              </div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-400">
                Shop Signs Built
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-64 rounded-2xl bg-zinc-200 overflow-hidden relative"
            >
              <Image
                src="/wd-home-services-image-4.png"
                alt="Neon Manufacturing"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="space-y-4 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-64 rounded-2xl bg-zinc-200 overflow-hidden relative"
            >
              <Image
                src="/wd-home-services-image-5.png"
                alt="Custom Signage"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-zinc-900 rounded-2xl subtle-shadow text-center"
            >
              <div className="text-3xl font-display font-semibold text-white mb-1">
                100%
              </div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-500">
                Custom Work
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
