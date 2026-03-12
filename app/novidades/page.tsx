"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaClock, FaPhone } from "react-icons/fa";

const WHATSAPP = "https://wa.me/5519991323263?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20tatuagem.";
const INSTAGRAM = "https://www.instagram.com/rick_tattoo_019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const contacts = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "(19) 99132-3263",
    href: WHATSAPP,
    color: "text-green-400",
    bg: "bg-green-500/10 hover:bg-green-500/20",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "@rick_tattoo_019",
    href: INSTAGRAM,
    color: "text-primary",
    bg: "bg-primary/10 hover:bg-primary/20",
  },
  {
    icon: FaClock,
    label: "Horário",
    value: "Seg–Sex: 10h–20h · Sáb: 10h–18h",
    href: null,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FaPhone,
    label: "Telefone",
    value: "(19) 99132-3263",
    href: WHATSAPP,
    color: "text-primary",
    bg: "bg-primary/10 hover:bg-primary/20",
  },
];

export default function NovidadesPage() {
  return (
    <main
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5" }}
    >
      {/* Top bar */}
      <div
        className="w-full py-2 text-center text-xs font-semibold uppercase tracking-widest"
        style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}
      >
        Em breve novidades incríveis — fique ligado!
      </div>

      {/* Header */}
      <header
        className="w-full border-b"
        style={{ backgroundColor: "#111111", borderColor: "#1a1a1a" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/">
            <Image
              src="/logo2.jpg"
              alt="Rick Tattoo"
              width={180}
              height={90}
              className="h-14 w-auto object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </a>
          <a
            href="/"
            className="text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ color: "#888" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00d9a3")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
          >
            ← Voltar ao site
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex items-center justify-center relative overflow-hidden px-6 py-20">
        {/* Background glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(0,217,163,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl w-full text-center">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.4em] mb-6"
            style={{ color: "#00d9a3" }}
          >
            Novidades a caminho
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold leading-tight mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
            }}
          >
            Algo Especial Está{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00d9a3, #00b88a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Chegando
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mb-8"
            style={{
              width: "64px",
              height: "2px",
              background: "linear-gradient(90deg, #00d9a3, #00b88a)",
            }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base leading-relaxed mb-14 max-w-xl mx-auto"
            style={{ color: "#888" }}
          >
            Estamos preparando novidades exclusivas para você. Enquanto isso,
            entre em contato pelo WhatsApp ou acompanhe nosso Instagram para
            ser o primeiro a saber.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-3 font-bold uppercase tracking-wider px-10 py-4 text-sm rounded-sm transition-colors duration-200"
              style={{ backgroundColor: "#22c55e", color: "#fff" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#16a34a")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#22c55e")
              }
            >
              <FaWhatsapp size={18} />
              Falar no WhatsApp
            </motion.a>

            <motion.a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-3 font-bold uppercase tracking-wider px-10 py-4 text-sm rounded-sm transition-all duration-200"
              style={{
                border: "1px solid rgba(0,217,163,0.35)",
                color: "#00d9a3",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00d9a3";
                e.currentTarget.style.backgroundColor = "rgba(0,217,163,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,217,163,0.35)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <FaInstagram size={18} />
              Ver Instagram
            </motion.a>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {contacts.map((c, i) => {
              const Inner = (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                  className="flex flex-col items-center gap-3 p-5 rounded-sm transition-colors duration-200"
                  style={{
                    backgroundColor: "#111111",
                    border: "1px solid #1a1a1a",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,217,163,0.1)" }}
                  >
                    <c.icon size={16} style={{ color: "#00d9a3" }} />
                  </div>
                  <div className="text-center">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-1"
                      style={{ color: "#f5f5f5" }}
                    >
                      {c.label}
                    </p>
                    <p className="text-xs" style={{ color: "#888" }}>
                      {c.value}
                    </p>
                  </div>
                </motion.div>
              );

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {Inner}
                </a>
              ) : (
                <div key={c.label}>{Inner}</div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full py-6 text-center border-t"
        style={{ borderColor: "#1a1a1a", backgroundColor: "#111111" }}
      >
        <p className="text-xs" style={{ color: "#555" }}>
          © {new Date().getFullYear()} Rick Tattoo — Todos os direitos reservados
        </p>
      </footer>
    </main>
  );
}
