"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const slides = [
  {
    title: "Tattoo Studio",
    subtitle: "OS ARTISTAS MAIS TALENTOSOS CRIANDO A ARTE DE MAIOR QUALIDADE.",
    bg: "from-black/70 via-black/50 to-black/80",
    accent: "Arte que fala pela sua pele",
  },
  {
    title: "Arte & Expressão",
    subtitle: "CADA TATUAGEM É UMA OBRA DE ARTE ÚNICA E PERSONALIZADA PARA VOCÊ.",
    bg: "from-black/80 via-black/40 to-black/70",
    accent: "Sua história contada na pele",
  },
  {
    title: "Craft & Passion",
    subtitle: "MAIS DE 10 ANOS TRANSFORMANDO IDEIAS EM ARTE PERMANENTE.",
    bg: "from-black/60 via-black/50 to-black/90",
    accent: "Tradição e modernidade",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const scrollDown = () => {
    const section = document.querySelector("#sobre");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background gradient layers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              current === 0
                ? "from-zinc-900 via-stone-900 to-black"
                : current === 1
                ? "from-black via-zinc-900 to-stone-950"
                : "from-stone-950 via-black to-zinc-900"
            }`}
          />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary blur-[100px]" />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-b ${slides[current].bg}`} />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        {/* Small accent line */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`accent-${current}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-[0.3em] mb-6"
          >
            {slides[current].accent}
          </motion.p>
        </AnimatePresence>

        {/* Main title */}
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-none"
            style={{ fontFamily: "'Satisfy', cursive" }}
          >
            {slides[current].title}
          </motion.h1>
        </AnimatePresence>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-px bg-primary mx-auto mb-6"
        />

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.25em] text-white/80 max-w-lg mx-auto leading-relaxed mb-10"
          >
            {slides[current].subtitle}
          </motion.p>
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#00b88a" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.querySelector("#contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary text-dark font-bold uppercase tracking-wider px-8 py-4 text-sm transition-colors duration-200"
          >
            Agendar Sessão
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#00d9a3", color: "#00d9a3" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.querySelector("#portfolio");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-white/40 text-white font-medium uppercase tracking-wider px-8 py-4 text-sm transition-all duration-200"
          >
            Ver Portfólio
          </motion.button>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-1.5 bg-primary"
                : "w-6 h-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll down indicator */}
      <motion.button
        onClick={scrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-8 z-10 text-white/50 hover:text-primary transition-colors duration-200"
        aria-label="Rolar para baixo"
      >
        <FaChevronDown size={20} />
      </motion.button>

    </section>
  );
}
