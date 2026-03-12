"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const WHATSAPP =
  "https://wa.me/5519991323263?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20tatuagem.";
const INSTAGRAM =
  "https://www.instagram.com/rick_tattoo_019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const cards = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    lines: ["(19) 99132-3263", "Atendimento rápido"],
    href: WHATSAPP,
    accent: "#22c55e",
    accentBg: "rgba(34,197,94,0.08)",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    lines: ["@rick_tattoo_019", "Acompanhe novidades"],
    href: INSTAGRAM,
    accent: "#00d9a3",
    accentBg: "rgba(0,217,163,0.08)",
  },
  {
    icon: FaClock,
    title: "Horário",
    lines: ["Seg – Sex: 10h às 20h", "Sáb: 10h às 18h"],
    href: null,
    accent: "#00d9a3",
    accentBg: "rgba(0,217,163,0.08)",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Localização",
    lines: ["Campinas – SP", "Consulte endereço pelo WhatsApp"],
    href: WHATSAPP,
    accent: "#00d9a3",
    accentBg: "rgba(0,217,163,0.08)",
  },
];

export default function NovidadesPage() {
  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

      {/* ── TOP BAR ── */}
      <div style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }} className="text-center py-2 text-xs font-bold uppercase tracking-widest">
        ~ Novidades chegando em breve — fique ligado! ~
      </div>

      {/* ── HEADER ── */}
      <header style={{ backgroundColor: "#111111", borderBottom: "1px solid #1a1a1a" }}>
        {/* Top header: logo + contato rápido */}
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="/">
            <Image
              src="/logo2.jpg"
              alt="Rick Tattoo"
              width={200}
              height={100}
              className="h-16 w-auto object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </a>
          <div className="flex items-center gap-6 text-sm" style={{ color: "#888" }}>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-white">
              <FaWhatsapp size={14} style={{ color: "#22c55e" }} />
              (19) 99132-3263
            </a>
            <span style={{ color: "#222" }}>|</span>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-white">
              <FaInstagram size={14} style={{ color: "#00d9a3" }} />
              @rick_tattoo_019
            </a>
          </div>
        </div>

        {/* Nav bar */}
        <div style={{ backgroundColor: "#1a1a1a", borderTop: "1px solid #222" }}>
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-widest" style={{ color: "#888" }}>
              {["Início", "Sobre", "Serviços", "Portfólio", "Artistas", "Blog"].map((item) => (
                <a key={item} href="/" className="transition-colors duration-200 hover:text-white hidden md:block">{item}</a>
              ))}
            </nav>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-sm transition-colors duration-200"
              style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00b88a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00d9a3")}
            >
              <FaWhatsapp size={13} />
              Agendar
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO / COMING SOON ── */}
      <section className="relative overflow-hidden" style={{ minHeight: "520px", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
        {/* Bg glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,217,163,0.06) 0%, transparent 70%)"
        }} />
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,217,163,0.3), transparent)" }} />
        <div className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,217,163,0.15), transparent)" }} />

        <div className="relative z-10 text-center max-w-3xl w-full">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-[0.45em] mb-5"
            style={{ color: "#00d9a3" }}
          >
            Em breve
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            Novidades Estão a{" "}
            <span style={{
              background: "linear-gradient(135deg, #00d9a3, #00b88a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Caminho
            </span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mb-8"
            style={{ width: 64, height: 2, background: "linear-gradient(90deg, #00d9a3, #00b88a)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "#888" }}
          >
            Estamos preparando algo especial para você. Acompanhe nossas redes sociais
            ou entre em contato pelo WhatsApp para saber mais e agendar sua sessão.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-3 font-bold uppercase tracking-wider px-10 py-4 text-sm rounded-sm"
              style={{ backgroundColor: "#22c55e", color: "#fff", transition: "background-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
            >
              <FaWhatsapp size={18} />
              Chamar no WhatsApp
            </motion.a>

            <motion.a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-3 font-bold uppercase tracking-wider px-10 py-4 text-sm rounded-sm"
              style={{
                border: "1px solid rgba(0,217,163,0.4)",
                color: "#00d9a3",
                backgroundColor: "transparent",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0,217,163,0.06)";
                e.currentTarget.style.borderColor = "#00d9a3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(0,217,163,0.4)";
              }}
            >
              <FaInstagram size={18} />
              Ver no Instagram
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ── CARDS DE CONTATO (estilo grid de produtos) ── */}
      <section style={{ backgroundColor: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a", padding: "64px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.4em] mb-3" style={{ color: "#00d9a3" }}>Fale Conosco</p>
            <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              Entre em <span style={{
                background: "linear-gradient(135deg, #00d9a3, #00b88a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Contato</span>
            </h2>
            <div className="mx-auto mt-5" style={{ width: 48, height: 2, background: "#00d9a3" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((card, i) => {
              const Inner = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center p-8 rounded-sm transition-all duration-200"
                  style={{
                    backgroundColor: "#0a0a0a",
                    border: "1px solid #1a1a1a",
                    cursor: card.href ? "pointer" : "default",
                  }}
                  whileHover={card.href ? { y: -4 } : {}}
                >
                  <div
                    className="w-14 h-14 rounded-sm flex items-center justify-center mb-5"
                    style={{ backgroundColor: card.accentBg }}
                  >
                    <card.icon size={22} style={{ color: card.accent }} />
                  </div>
                  <p className="font-semibold text-sm uppercase tracking-wider mb-3" style={{ color: "#f5f5f5" }}>
                    {card.title}
                  </p>
                  {card.lines.map((line) => (
                    <p key={line} className="text-xs leading-relaxed" style={{ color: "#888" }}>
                      {line}
                    </p>
                  ))}
                </motion.div>
              );

              return card.href ? (
                <a key={card.title} href={card.href} target="_blank" rel="noopener noreferrer">
                  {Inner}
                </a>
              ) : (
                <div key={card.title}>{Inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BANNER NEWSLETTER ── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "64px 24px" }}>
        <div
          className="max-w-4xl mx-auto rounded-sm p-12 text-center relative overflow-hidden"
          style={{ backgroundColor: "#111111", border: "1px solid #1a1a1a" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,217,163,0.05) 0%, transparent 70%)"
          }} />
          <div className="relative z-10">
            <FaWhatsapp size={36} className="mx-auto mb-6" style={{ color: "#22c55e" }} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Agende Sua Sessão
            </h3>
            <p className="text-sm leading-relaxed mb-8 max-w-md mx-auto" style={{ color: "#888" }}>
              Pronto para a sua próxima tatuagem? Manda uma mensagem no WhatsApp e
              o Henrique vai te atender para agendar sua sessão.
            </p>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 font-bold uppercase tracking-wider px-12 py-4 text-sm rounded-sm"
              style={{ backgroundColor: "#22c55e", color: "#fff", transition: "background-color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
            >
              <FaWhatsapp size={18} />
              Chamar no WhatsApp
            </motion.a>
            <p className="mt-4 text-xs" style={{ color: "#555" }}>(19) 99132-3263</p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#111111", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Col 1 – Logo + sobre */}
          <div>
            <a href="/">
              <Image
                src="/logo2.jpg"
                alt="Rick Tattoo"
                width={160}
                height={80}
                className="h-12 w-auto object-contain mb-5"
                style={{ mixBlendMode: "screen" }}
              />
            </a>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#666" }}>
              Estúdio de tatuagem especializado em arte personalizada. Cada traço
              conta uma história única.
            </p>
            <div className="flex gap-4">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: "rgba(0,217,163,0.1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,217,163,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(0,217,163,0.1)")}
              >
                <FaInstagram size={15} style={{ color: "#00d9a3" }} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm flex items-center justify-center transition-colors duration-200"
                style={{ backgroundColor: "rgba(34,197,94,0.1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(34,197,94,0.2)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(34,197,94,0.1)")}
              >
                <FaWhatsapp size={15} style={{ color: "#22c55e" }} />
              </a>
            </div>
          </div>

          {/* Col 2 – Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#f5f5f5" }}>
              Navegação
            </p>
            <ul className="flex flex-col gap-3">
              {["Início", "Sobre", "Serviços", "Artistas", "Portfólio", "Blog", "Contato"].map((item) => (
                <li key={item}>
                  <a href="/" className="text-sm transition-colors duration-200"
                    style={{ color: "#666" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00d9a3")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Contato */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#f5f5f5" }}>
              Contato
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <FaWhatsapp size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#22c55e" }} />
                  <span className="text-sm transition-colors duration-200 group-hover:text-white" style={{ color: "#666" }}>
                    (19) 99132-3263
                  </span>
                </a>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <FaInstagram size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#00d9a3" }} />
                  <span className="text-sm transition-colors duration-200 group-hover:text-white" style={{ color: "#666" }}>
                    @rick_tattoo_019
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#00d9a3" }} />
                <span className="text-sm leading-relaxed" style={{ color: "#666" }}>
                  Seg – Sex: 10h às 20h<br />Sáb: 10h às 18h
                </span>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <FaEnvelope size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#00d9a3" }} />
                  <span className="text-sm transition-colors duration-200 group-hover:text-white" style={{ color: "#666" }}>
                    Campinas – SP
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #1a1a1a", padding: "18px 24px" }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs" style={{ color: "#444" }}>
              © {new Date().getFullYear()} Rick Tattoo — Todos os direitos reservados
            </p>
            <p className="text-xs" style={{ color: "#444" }}>
              Campinas – SP · (19) 99132-3263
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
