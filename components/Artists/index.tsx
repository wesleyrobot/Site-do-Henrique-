"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "https://wa.me/5519991323263";
const INSTAGRAM = "https://www.instagram.com/rick_tattoo_019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export default function Artists() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="artistas" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-[0.3em] mb-4"
          >
            Conheça o Artista
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nosso <span className="gradient-text">Tatuador</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-0.5 bg-primary mx-auto mt-6"
          />
        </div>

        {/* Single artist - centered layout */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group max-w-2xl w-full"
          >
            <div className="relative overflow-hidden bg-dark-3 rounded-sm card-hover">
              {/* Artist photo */}
              <div className="relative overflow-hidden bg-zinc-900 h-64 sm:h-80 md:h-96 lg:h-[420px]">
                <Image
                  src="/artists/henrique.jpg"
                  alt="Henrique"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 768px"
                />

                {/* Hover overlay with social links */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8">
                  <div className="flex gap-4">
                    <a
                      href={INSTAGRAM}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-200"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-200"
                    >
                      <FaWhatsapp size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-white font-bold text-2xl">Henrique</h3>
                <p className="text-primary text-xs uppercase tracking-wider mt-1 mb-4">
                  Tatuador Profissional · Rick Tattoo
                </p>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Especialista em diversas técnicas, transformando ideias em arte permanente com precisão e dedicação. Cada tattoo é única e feita com muito cuidado.
                </p>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-dark font-bold uppercase tracking-wider py-3 text-sm hover:bg-primary-dark transition-colors duration-200"
                  >
                    <FaWhatsapp size={16} />
                    Agendar
                  </a>
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 border border-white/10 text-muted px-4 py-3 text-sm hover:border-primary/40 hover:text-primary transition-all duration-200"
                  >
                    <FaInstagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
