"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const WHATSAPP = "https://wa.me/5519991323263?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20tatuagem.";
const INSTAGRAM = "https://www.instagram.com/rick_tattoo_019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export default function NovidadesPage() {
  return (
    <main className="min-h-screen bg-dark flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full">
        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 block"
        >
          <Image
            src="/logo2.jpg"
            alt="Rick Tattoo"
            width={220}
            height={110}
            className="h-20 w-auto object-contain"
            style={{ mixBlendMode: "screen" }}
          />
        </motion.a>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary text-xs font-semibold uppercase tracking-[0.35em] mb-5"
        >
          Em breve
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Novidades a <span className="gradient-text">Caminho</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-16 h-0.5 bg-primary mx-auto my-6"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-muted text-base leading-relaxed mb-12"
        >
          Estamos preparando algo especial. Fique de olho nas nossas redes
          sociais para ser o primeiro a saber quando lançar.
        </motion.p>

        {/* Contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <motion.a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold uppercase tracking-wider px-8 py-4 text-sm rounded-sm transition-colors duration-200"
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </motion.a>

          <motion.a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-3 border border-primary/40 hover:border-primary text-primary hover:bg-primary/5 font-bold uppercase tracking-wider px-8 py-4 text-sm rounded-sm transition-colors duration-200"
          >
            <FaInstagram size={20} />
            Instagram
          </motion.a>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 text-muted text-sm"
        >
          <span className="flex items-center gap-2 justify-center">
            <FaWhatsapp size={14} className="text-green-400" />
            (19) 99132-3263
          </span>
          <span className="hidden sm:block text-white/10">|</span>
          <span className="flex items-center gap-2 justify-center">
            <FaInstagram size={14} className="text-primary" />
            @rick_tattoo_019
          </span>
        </motion.div>

        {/* Back link */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-12 text-muted text-xs uppercase tracking-widest hover:text-white transition-colors duration-200"
        >
          ← Voltar ao site
        </motion.a>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </main>
  );
}
