"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const rules = [
  "Choose designs that complement your brand identity and architectural style",
  "Consider visibility distance, viewing angles, and installation location",
  "Invest in quality craftsmanship — avoid generic signs that fade rather than captivate",
];

export default function NeonGuide() {
  return (
    <section className="py-24 px-6 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">
        {/* Rules Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] bg-zinc-200 overflow-hidden relative">
              <Image
                src="/wd-home-services-image-2.png"
                alt="Choosing the perfect neon sign"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4 block">
                Expert Guidance
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-zinc-900 tracking-tighter leading-tight mb-6">
                Rules for Choosing the <br />
                Perfect Neon Sign
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-zinc-500 leading-relaxed mb-10"
            >
              Whether illuminating your shopfront or transforming your business
              interior, neon signage plays a crucial role in defining your brand
              presence. It&apos;s where first impressions are made, where atmosphere
              is created, and where visibility meets visual impact. Choosing neon
              signs that create eye-catching appeal while delivering long-lasting
              performance and energy efficiency is key to making your business
              stand out for years to come.
            </motion.p>

            <div className="space-y-5">
              {rules.map((rule, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <span className="mt-1.5 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-zinc-900" />
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {rule}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bespoke Lighting Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-50 rounded-[2.5rem] p-10 md:p-16 mb-16 border border-zinc-100"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4 block">
                Our Philosophy
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-semibold text-zinc-900 tracking-tighter leading-tight">
                Bespoke Lighting Solutions for Every Space
              </h3>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-sm text-zinc-500 leading-relaxed">
                Lighting transforms spaces — it sets the mood, defines
                atmosphere, and creates extraordinary experiences. Whether
                illuminating a luxury hotel, highlighting architectural features,
                or crafting custom brand signage, the right lighting makes all
                the difference. At Moderneon, we offer a comprehensive range of
                neon, LED, and cold cathode lighting solutions tailored to your
                unique needs. Explore our portfolio and discover how our
                handcrafted lighting and signage can bring your vision to life.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Established in central London, Moderneon London Ltd was one of
                the market leaders of neon lights, dazzling neon signs across
                central London and the home counties — designers, fabricators,
                and installers. Flashing or still signage is what we did, and we
                are here today to carry on the trade.
              </p>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Let us know how we can help advertise and improve your business —
                traditional, modern, or just vinyl cut lettering and banners. We
                are just a phone call or email away.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Craftsmanship Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4 block">
              Heritage & Innovation
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-semibold text-zinc-900 tracking-tighter leading-tight mb-6">
              Lighting Craftsmanship <br />
              Meets Modern Innovation
            </h3>
            <p className="text-sm text-zinc-500 leading-relaxed mb-8">
              For over 50 years, Moderneon has been creating lighting and
              signage, bespoke, that blend traditional and modern design with
              cutting-edge technology. Our skilled craftsmen combine decades of
              hands-on expertise with the latest LED and neon innovations to
              deliver signage that is as durable as it is beautiful.
            </p>
            <button className="flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:shadow-xl transition-all group">
              Discover Our Process
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] bg-zinc-200 overflow-hidden relative">
              <Image
                src="/wd-home-services-image-3.png"
                alt="Lighting craftsmanship and modern innovation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
