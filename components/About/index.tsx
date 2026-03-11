"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAward, FaUsers, FaHeart, FaStar } from "react-icons/fa";

const stats: { icon: React.ElementType; label: string; value?: string }[] = [
  { icon: FaAward, label: "Anos de Experiência" },
  { icon: FaUsers, label: "Clientes Satisfeitos" },
  { icon: FaHeart, label: "Tattoos Realizadas" },
  { icon: FaStar, label: "Avaliação Média", value: "5.0" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="sobre" className="section-padding bg-dark-2 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative aspect-[4/3] md:aspect-[4/5] bg-dark-3 rounded-sm overflow-hidden">
              <Image
                src="/sobre.jpg"
                alt="Rick Tattoo Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-dark/80 backdrop-blur-sm border border-white/10 p-4 rounded-sm">
                  <p className="text-primary text-sm font-medium uppercase tracking-widest">
                    Rick Tattoo
                  </p>
                  <p className="text-white font-semibold mt-1">
                    Arte que conta sua história
                  </p>
                </div>
              </div>
            </div>

            {/* Green accent border */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/30 rounded-sm pointer-events-none" />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-primary text-sm font-medium uppercase tracking-[0.3em] mb-4"
            >
              Sobre o Estúdio
            </motion.p>

            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Arte e Paixão em{" "}
              <span className="gradient-text">Cada Traço</span>
            </motion.h2>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="w-12 h-0.5 bg-primary mb-6"
            />

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-muted leading-relaxed mb-4 text-[15px]"
            >
              Somos um estúdio de tatuagem dedicado à excelência artística. Nossa equipe
              de artistas altamente qualificados transforma sua visão em obras de arte
              permanentes, combinando técnicas tradicionais com estilos contemporâneos.
            </motion.p>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-muted leading-relaxed mb-8 text-[15px]"
            >
              Cada tattoo é tratada como uma peça única. Trabalhamos com você desde
              o conceito inicial até a realização final, garantindo um resultado que
              supera suas expectativas e dura para sempre.
            </motion.p>

            {/* Features */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {["Ambiente Esterilizado", "Tintas Premium", "Arte Personalizada", "Pós-atendimento"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                )
              )}
            </motion.div>

            <motion.button
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.querySelector("#contato");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-dark font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-primary-dark transition-colors duration-200"
            >
              Fale Conosco
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-10 border-t border-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-center"
            >
              <stat.icon className="text-primary mx-auto mb-3" size={28} />
              {stat.value && (
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              )}
              <div className="text-muted text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
