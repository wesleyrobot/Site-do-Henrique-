"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaUser,
  FaClock,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";

const WHATSAPP =
  "https://wa.me/5519991323263?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20tatuagem.";
const INSTAGRAM =
  "https://www.instagram.com/rick_tattoo_019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const navCategories = [
  "Blackwork",
  "Realismo",
  "Old School",
  "Fineline",
  "Aquarela",
  "Geométrico",
  "Oriental",
  "Tribal",
];

const bannerCards = [
  {
    bg: "#111111",
    label: "Estilo Exclusivo",
    title: "Blackwork & Fineline",
    sub: "Arte em preto e branco com traços precisos",
  },
  {
    bg: "#0f0f0f",
    label: "Especialidade",
    title: "Realismo & Retrato",
    sub: "Transforme fotos em tatuagens únicas",
  },
  {
    bg: "#111111",
    label: "Em Destaque",
    title: "Old School & Aquarela",
    sub: "Cores vibrantes e traços marcantes",
  },
];

export default function NovidadesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

      {/* ══ 1. BARRA SUPERIOR ══ */}
      <div
        className="text-center py-2 text-xs font-bold tracking-widest"
        style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}
      >
        ~ Novidades chegando em breve — fique ligado! ~
      </div>

      {/* ══ 2. HEADER PRINCIPAL (logo + ícones) ══ */}
      <header style={{ backgroundColor: "#111111", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/logo2.jpg"
              alt="Rick Tattoo"
              width={200}
              height={100}
              className="h-14 w-auto object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </a>

          {/* Barra de "busca" / slogan central */}
          <div
            className="hidden md:flex flex-1 max-w-xl items-center px-5 py-3 rounded-sm"
            style={{ backgroundColor: "#1a1a1a", border: "1px solid #222" }}
          >
            <span className="text-sm flex-1" style={{ color: "#555" }}>
              Arte na pele que conta sua história...
            </span>
            <div className="w-8 h-8 flex items-center justify-center rounded-sm" style={{ backgroundColor: "#00d9a3" }}>
              <FaChevronRight size={12} style={{ color: "#0a0a0a" }} />
            </div>
          </div>

          {/* Ícones direita */}
          <div className="flex items-center gap-5">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-70"
            >
              <FaWhatsapp size={20} style={{ color: "#22c55e" }} />
              <span className="text-[10px] hidden md:block" style={{ color: "#888" }}>WhatsApp</span>
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-70"
            >
              <FaInstagram size={20} style={{ color: "#00d9a3" }} />
              <span className="text-[10px] hidden md:block" style={{ color: "#888" }}>Instagram</span>
            </a>
            <div className="flex flex-col items-center gap-1 cursor-default">
              <FaUser size={18} style={{ color: "#888" }} />
              <span className="text-[10px] hidden md:block" style={{ color: "#888" }}>Conta</span>
            </div>
          </div>
        </div>
      </header>

      {/* ══ 3. BARRA DE NAVEGAÇÃO / CATEGORIAS ══ */}
      <nav style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #222" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          {/* Hamburger + Mais Categorias */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-5 py-4 font-bold text-xs uppercase tracking-widest transition-colors duration-200"
            style={{ backgroundColor: "#00d9a3", color: "#0a0a0a", borderRight: "1px solid rgba(0,0,0,0.1)" }}
          >
            <FaBars size={14} />
            <span className="hidden sm:block">Mais Estilos</span>
          </button>

          {/* Links de categorias */}
          <div className="flex items-center overflow-x-auto scrollbar-hide">
            {navCategories.map((cat) => (
              <a
                key={cat}
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-4 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors duration-200 hover:text-white border-r"
                style={{ color: "#888", borderColor: "#222" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* Dropdown mobile */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 grid grid-cols-2 gap-2">
            {navCategories.map((cat) => (
              <a key={cat} href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="text-xs py-2 px-3 rounded-sm transition-colors duration-200"
                style={{ backgroundColor: "#111", color: "#888" }}
              >
                {cat}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ══ 4. BANNER HERO PRINCIPAL ══ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "460px", display: "flex", alignItems: "center", backgroundColor: "#0d0d0d" }}
      >
        {/* Fundo com gradiente/textura escura */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #111111 40%, #0d0d0d 100%)",
        }} />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(0,217,163,0.08) 0%, transparent 60%)",
        }} />

        {/* Decoração lado direito */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block"
          style={{
            background: "linear-gradient(135deg, transparent 30%, rgba(0,217,163,0.03) 100%)",
            borderLeft: "1px solid rgba(0,217,163,0.08)",
          }}
        >
          {/* Círculos decorativos */}
          <div className="absolute top-1/2 right-16 -translate-y-1/2 rounded-full opacity-10"
            style={{ width: 300, height: 300, border: "1px solid #00d9a3" }} />
          <div className="absolute top-1/2 right-24 -translate-y-1/2 rounded-full opacity-5"
            style={{ width: 200, height: 200, backgroundColor: "#00d9a3" }} />
          <div className="absolute top-1/2 right-8 -translate-y-1/2 rounded-full opacity-5"
            style={{ width: 420, height: 420, border: "1px solid #00d9a3" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="max-w-2xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm mb-8"
              style={{ backgroundColor: "rgba(0,217,163,0.1)", border: "1px solid rgba(0,217,163,0.2)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#00d9a3" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00d9a3" }}>
                Em Breve
              </span>
            </motion.div>

            {/* Título grande */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-bold leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              Novidades
              <br />
              <span style={{
                background: "linear-gradient(135deg, #00d9a3, #00b88a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Exclusivas
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-2 font-light"
              style={{ color: "#aaa" }}
            >
              Garantem inovação, arte e design único na sua pele
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm mb-10"
              style={{ color: "#666" }}
            >
              Estamos preparando algo especial. Acompanhe nossas redes ou agende já sua sessão.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-3 font-bold uppercase tracking-wider px-8 py-4 text-sm rounded-sm"
                style={{ backgroundColor: "#00d9a3", color: "#0a0a0a", transition: "background-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00b88a")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00d9a3")}
              >
                <FaWhatsapp size={16} />
                Conheça a linha completa
              </motion.a>

              <motion.a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center justify-center gap-3 font-semibold uppercase tracking-wider px-8 py-4 text-sm rounded-sm"
                style={{ border: "1px solid #333", color: "#888", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00d9a3"; e.currentTarget.style.color = "#00d9a3"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#333"; e.currentTarget.style.color = "#888"; }}
              >
                <FaInstagram size={16} />
                Ver Instagram
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Dots paginação estilo banner */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="rounded-full" style={{ width: 24, height: 8, backgroundColor: "#00d9a3", borderRadius: 4 }} />
          <div className="rounded-full" style={{ width: 8, height: 8, backgroundColor: "#333" }} />
        </div>
      </section>

      {/* ══ 5. 3 BANNERS MENORES (grid) ══ */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "4px" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {bannerCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden flex flex-col justify-end"
              style={{ backgroundColor: card.bg, minHeight: "220px", padding: "28px" }}
            >
              {/* Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, #00d9a3, transparent)", transform: "translate(30%, -30%)" }} />

              <span className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#00d9a3" }}>
                {card.label}
              </span>
              <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5" }}>
                {card.title}
              </h3>
              <p className="text-xs mb-5" style={{ color: "#666" }}>{card.sub}</p>
              <span
                className="inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm transition-colors duration-200"
                style={{ backgroundColor: "#1a1a1a", color: "#00d9a3", border: "1px solid #222" }}
              >
                Saiba mais
                <FaChevronRight size={10} />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ══ 6. FAIXA DE CONTATO ══ */}
      <section style={{ backgroundColor: "#111111", borderTop: "1px solid #1a1a1a", padding: "48px 24px" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: "#1a1a1a" }}>
          {[
            { icon: FaWhatsapp, label: "WhatsApp", value: "(19) 99132-3263", href: WHATSAPP, color: "#22c55e" },
            { icon: FaInstagram, label: "Instagram", value: "@rick_tattoo_019", href: INSTAGRAM, color: "#00d9a3" },
            { icon: FaClock, label: "Horário", value: "Seg–Sex 10h–20h · Sáb 10h–18h", href: null, color: "#00d9a3" },
            { icon: FaMapMarkerAlt, label: "Localização", value: "Campinas – SP", href: WHATSAPP, color: "#00d9a3" },
          ].map((item) => {
            const Inner = (
              <div
                className="flex flex-col items-center text-center p-8 transition-colors duration-200"
                style={{ backgroundColor: "#111111" }}
                onMouseEnter={(e) => { if (item.href) e.currentTarget.style.backgroundColor = "#131313"; }}
                onMouseLeave={(e) => { if (item.href) e.currentTarget.style.backgroundColor = "#111111"; }}
              >
                <item.icon size={22} className="mb-3" style={{ color: item.color }} />
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#f5f5f5" }}>{item.label}</p>
                <p className="text-xs" style={{ color: "#666" }}>{item.value}</p>
              </div>
            );
            return item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{Inner}</a>
            ) : (
              <div key={item.label}>{Inner}</div>
            );
          })}
        </div>
      </section>

      {/* ══ 7. FOOTER ══ */}
      <footer style={{ backgroundColor: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + sobre */}
          <div>
            <a href="/">
              <Image src="/logo2.jpg" alt="Rick Tattoo" width={160} height={80}
                className="h-12 w-auto object-contain mb-5" style={{ mixBlendMode: "screen" }} />
            </a>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#555" }}>
              Estúdio de tatuagem especializado em arte personalizada. Cada traço conta uma história.
            </p>
            <div className="flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,217,163,0.1)", border: "1px solid #1a1a1a" }}>
                <FaInstagram size={14} style={{ color: "#00d9a3" }} />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: "rgba(34,197,94,0.1)", border: "1px solid #1a1a1a" }}>
                <FaWhatsapp size={14} style={{ color: "#22c55e" }} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#f5f5f5" }}>Navegação</p>
            <ul className="grid grid-cols-2 gap-2">
              {["Início", "Sobre", "Serviços", "Artistas", "Portfólio", "Blog", "Contato", "Agendar"].map((item) => (
                <li key={item}>
                  <a href="/" className="text-xs transition-colors duration-200 flex items-center gap-1"
                    style={{ color: "#555" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#00d9a3")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                  >
                    <FaChevronRight size={8} /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#f5f5f5" }}>Contato</p>
            <ul className="flex flex-col gap-4">
              {[
                { icon: FaWhatsapp, text: "(19) 99132-3263", href: WHATSAPP, color: "#22c55e" },
                { icon: FaInstagram, text: "@rick_tattoo_019", href: INSTAGRAM, color: "#00d9a3" },
                { icon: FaClock, text: "Seg–Sex: 10h às 20h · Sáb: 10h às 18h", href: null, color: "#00d9a3" },
                { icon: FaMapMarkerAlt, text: "Campinas – SP", href: null, color: "#00d9a3" },
              ].map((c) => {
                const el = (
                  <div className="flex items-start gap-3 group">
                    <c.icon size={13} className="mt-0.5 flex-shrink-0" style={{ color: c.color }} />
                    <span className="text-xs leading-relaxed transition-colors duration-200" style={{ color: "#555" }}>
                      {c.text}
                    </span>
                  </div>
                );
                return c.href ? (
                  <a key={c.text} href={c.href} target="_blank" rel="noopener noreferrer"
                    onMouseEnter={(e) => e.currentTarget.querySelector("span")!.style.color = "#fff"}
                    onMouseLeave={(e) => e.currentTarget.querySelector("span")!.style.color = "#555"}
                  >{el}</a>
                ) : <div key={c.text}>{el}</div>;
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid #1a1a1a", padding: "16px 24px" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs" style={{ color: "#333" }}>© {new Date().getFullYear()} Rick Tattoo — Todos os direitos reservados</p>
            <p className="text-xs" style={{ color: "#333" }}>Campinas – SP · (19) 99132-3263</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
