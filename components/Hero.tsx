"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    badge: "Expert Sign Makers in UK",
    headline: (
      <>
        Bespoke <span className="text-zinc-400">Shop Signs</span> & Iconic{" "}
        <br />
        Neon Signs.
      </>
    ),
    description: (
      <>
        As leading <strong>sign manufacturers</strong>, we blend traditional
        craftsmanship with modern technology to create stunning{" "}
        <strong>neon lights</strong> and commercial signage for high-end retail.
      </>
    ),
    cta1: "View Sign Catalogue",
    cta2: "Our Manufacturing Process",
    image: "/wd-home-product-img-1.webp",
    imageAlt: "Custom Neon Signs Manufacturing",
  },
  {
    badge: "Architectural Lighting Specialists",
    headline: (
      <>
        Transforming <span className="text-zinc-400">Buildings</span> with
        Radiant <br />
        Light.
      </>
    ),
    description: (
      <>
        Our architectural lighting team designs and installs{" "}
        <strong>facade lighting</strong> and feature illumination that
        transforms commercial and heritage <strong>buildings</strong> after dark.
      </>
    ),
    cta1: "View Projects",
    cta2: "Lighting Design Services",
    image: "/wd-main-product-img-3.webp",
    imageAlt: "Architectural Building Lighting",
  },
  {
    badge: "Interior Ambience & Design",
    headline: (
      <>
        Crafting <span className="text-zinc-400">Atmosphere</span> Through
        Bespoke <br />
        Lighting.
      </>
    ),
    description: (
      <>
        From boutique hotels to flagship stores, we create{" "}
        <strong>bespoke lighting</strong> installations that set the mood and
        elevate every <strong>interior space</strong>.
      </>
    ),
    cta1: "Explore Interiors",
    cta2: "Book a Consultation",
    image: "/wd-home-services-image-5.png",
    imageAlt: "Interior Bespoke Lighting Design",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Preload images for slides 2 & 3
  useEffect(() => {
    slides.slice(1).forEach((slide) => {
      const img = new window.Image();
      img.src = slide.image;
    });
  }, []);

  const slide = slides[current];

  const textVariants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -40 }),
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 0.92 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  };

  return (
    <section
      className="pt-32 pb-20 px-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0 }}
                  className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                    {slide.badge}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl md:text-7xl font-display font-semibold text-zinc-900 leading-[1.1] tracking-tighter mb-8"
                >
                  {slide.headline}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-zinc-500 max-w-xl mb-10 leading-relaxed"
                >
                  {slide.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <button className="flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:shadow-xl transition-all group">
                    {slide.cta1}
                    <ArrowUpRight
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </button>
                  <button className="flex items-center gap-3 bg-white border border-zinc-200 text-zinc-700 px-8 py-4 rounded-xl text-sm font-semibold hover:bg-zinc-50 transition-all">
                    {slide.cta2}
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="aspect-[4/5] rounded-[2rem] bg-zinc-200 overflow-hidden subtle-shadow relative"
                >
                  <Image
                    src={slide.image}
                    alt={slide.imageAlt}
                    fill
                    priority={current === 0}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* "Top Rated" floating badge — persists across slides */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl subtle-shadow border border-zinc-100 max-w-[200px] z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Star
                    className="text-amber-400"
                    size={16}
                    fill="currentColor"
                  />
                  <span className="text-xs font-bold text-zinc-900">
                    Top Rated
                  </span>
                </div>
                <p className="text-[10px] text-zinc-500 leading-tight">
                  Voted best <strong>sign makers</strong> for retail branding
                  2024.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-16">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-zinc-900"
                  : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
