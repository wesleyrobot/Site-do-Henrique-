"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaBars,
  FaUser,
  FaShoppingCart,
  FaSearch,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const WHATSAPP =
  "https://wa.me/5519991323263?text=Olá!%20Gostaria%20de%20mais%20informações.";
const INSTAGRAM =
  "https://www.instagram.com/rick_tattoo_019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const categories = [
  "Charutos",
  "Cachimbos",
  "Narguilés",
  "Sedas",
  "Isqueiros",
  "Acessórios",
  "Bongs",
  "Head Shop",
  "Zippo",
  "Cinzeiros",
];

const bannerCards = [
  {
    title: "Charutos Premium",
    sub: "Sabor, qualidade e sofisticação para os apreciadores",
    cta: "Conheça a linha completa",
    accent: "#00d9a3",
  },
  {
    title: "Acessórios para Narguilé",
    sub: "Os melhores equipamentos e sabores disponíveis",
    cta: "Ver acessórios",
    accent: "#00d9a3",
  },
  {
    title: "Isqueiros Zippo",
    sub: "Coleção especial de isqueiros icônicos",
    cta: "Ver coleção",
    accent: "#00d9a3",
  },
];

const products = [
  { name: "Charuto Cohiba Especial", price: "R$ 89,90", tag: "Destaque" },
  { name: "Cachimbo Artesanal Briar", price: "R$ 149,90", tag: "Novo" },
  { name: "Seda OCB Organic", price: "R$ 8,90", tag: null },
  { name: "Cinzeiro Cristal Premium", price: "R$ 45,90", tag: "Destaque" },
  { name: "Isqueiro Zippo Classic", price: "R$ 199,90", tag: "Novo" },
  { name: "Kit Narguilé Completo", price: "R$ 320,00", tag: "Oferta" },
  { name: "Bong Acrílico Estampado", price: "R$ 79,90", tag: null },
  { name: "Caixa Umidora 25 Charutos", price: "R$ 189,00", tag: "Destaque" },
];

export default function NovidadesPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* ══ 1. BARRA SUPERIOR ══ */}
      <div
        className="text-center py-2 text-xs font-bold tracking-widest"
        style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}
      >
        ~ Em Breve — Novidades incríveis chegando para você! ~
      </div>

      {/* ══ 2. HEADER PRINCIPAL ══ */}
      <header style={{ backgroundColor: "#111111", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/logo2.jpg"
              alt="Rick Tattoo"
              width={180}
              height={90}
              className="h-14 w-auto object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </a>

          {/* Barra de busca central */}
          <div className="flex-1 hidden md:flex items-center rounded-sm overflow-hidden"
            style={{ border: "1px solid #222", backgroundColor: "#1a1a1a" }}>
            <input
              type="text"
              placeholder="Procure seu produto aqui..."
              readOnly
              className="flex-1 px-5 py-3 text-sm bg-transparent outline-none"
              style={{ color: "#888" }}
            />
            <button
              className="px-5 py-3 flex items-center justify-center"
              style={{ backgroundColor: "#00d9a3" }}
            >
              <FaSearch size={15} style={{ color: "#0a0a0a" }} />
            </button>
          </div>

          {/* Ícones direita */}
          <div className="flex items-center gap-5 ml-auto md:ml-0">
            <button className="flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-70">
              <FaWhatsapp size={22} style={{ color: "#22c55e" }} />
              <span className="text-[10px] hidden md:block" style={{ color: "#888" }}>Suporte</span>
            </button>
            <button className="flex flex-col items-center gap-1 transition-opacity duration-200 hover:opacity-70">
              <FaUser size={20} style={{ color: "#888" }} />
              <span className="text-[10px] hidden md:block" style={{ color: "#888" }}>Conta</span>
            </button>
            <button className="flex flex-col items-center gap-1 relative transition-opacity duration-200 hover:opacity-70">
              <FaShoppingCart size={21} style={{ color: "#f5f5f5" }} />
              <span
                className="absolute -top-1 -right-2 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
                style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}
              >
                0
              </span>
              <span className="text-[10px] hidden md:block" style={{ color: "#888" }}>Carrinho</span>
            </button>
          </div>
        </div>
      </header>

      {/* ══ 3. BARRA DE NAVEGAÇÃO / CATEGORIAS ══ */}
      <nav style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #222", position: "relative" }}>
        <div className="max-w-7xl mx-auto px-0 flex items-center">
          {/* Botão Mais Categorias */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-5 py-4 font-bold text-xs uppercase tracking-widest flex-shrink-0"
            style={{ backgroundColor: "#00d9a3", color: "#0a0a0a", borderRight: "1px solid rgba(0,0,0,0.15)" }}
          >
            {menuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
            <span>Mais Categorias</span>
          </button>

          {/* Links — decorativos, sem navegação (em breve) */}
          <div className="flex items-center overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-5 py-4 text-xs font-semibold uppercase tracking-wider whitespace-nowrap border-r cursor-default"
                style={{ color: "#888", borderColor: "#222" }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Dropdown de categorias */}
        {menuOpen && (
          <div
            className="absolute left-0 z-50 w-56 py-2 shadow-2xl"
            style={{ top: "100%", backgroundColor: "#111111", border: "1px solid #1a1a1a" }}
          >
            {categories.map((cat) => (
              <span
                key={cat}
                className="flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider cursor-default"
                style={{ color: "#888", borderBottom: "1px solid #1a1a1a", display: "flex" }}
              >
                <FaChevronRight size={8} style={{ color: "#00d9a3" }} />
                {cat}
              </span>
            ))}
          </div>
        )}
      </nav>

      {/* ══ 4. BANNER HERO PRINCIPAL ══ */}
      <section
        style={{
          minHeight: "420px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0d0d0d",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Fundo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, #0a0a0a 0%, #0f0f0f 50%, #0d0d0d 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 75% 50%, rgba(0,217,163,0.07) 0%, transparent 65%)",
          }}
        />

        {/* Elementos decorativos direita */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:block pointer-events-none">
          {[320, 220, 140].map((size, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: size,
                height: size,
                border: `1px solid rgba(0,217,163,${0.06 + i * 0.03})`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm mb-6"
              style={{
                backgroundColor: "rgba(0,217,163,0.1)",
                border: "1px solid rgba(0,217,163,0.25)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#00d9a3", animation: "pulse 2s infinite" }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "#00d9a3" }}
              >
                Em Breve
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 5vw, 3.6rem)",
                fontWeight: "bold",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Os Melhores
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #00d9a3, #00b88a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Produtos!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: "#888", fontSize: "1rem", marginBottom: "8px" }}
            >
              Preços acessíveis e condições de pagamento facilitadas.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              style={{ color: "#555", fontSize: "0.875rem", marginBottom: "40px" }}
            >
              Nossa loja online chegará em breve — acompanhe pelo Instagram ou fale conosco pelo WhatsApp.
            </motion.p>

            {/* Botões */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 font-bold uppercase tracking-wider px-8 py-4 text-sm rounded-sm"
                style={{
                  backgroundColor: "#00d9a3",
                  color: "#0a0a0a",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#00b88a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#00d9a3")
                }
              >
                <FaWhatsapp size={16} />
                Acesse a nossa Loja
              </motion.a>

              <motion.a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 font-semibold uppercase tracking-wider px-8 py-4 text-sm rounded-sm"
                style={{
                  border: "1px solid #2a2a2a",
                  color: "#888",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00d9a3";
                  e.currentTarget.style.color = "#00d9a3";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#2a2a2a";
                  e.currentTarget.style.color = "#888";
                }}
              >
                <FaInstagram size={16} />
                Compre Agora
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Dots paginação */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          <div style={{ width: 24, height: 8, backgroundColor: "#00d9a3", borderRadius: 4 }} />
          <div style={{ width: 8, height: 8, backgroundColor: "#2a2a2a", borderRadius: 99 }} />
        </div>
      </section>

      {/* ══ 5. 3 BANNERS MENORES ══ */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "2px", backgroundColor: "#222" }}>
          {bannerCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ brightness: 1.1 } as never}
              className="relative flex flex-col justify-end overflow-hidden group"
              style={{ backgroundColor: "#111111", minHeight: "220px", padding: "28px 28px 24px" }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,217,163,0.07) 0%, transparent 70%)",
                  transform: "translate(30%,-30%)",
                }}
              />
              <span
                className="text-xs font-bold uppercase tracking-widest mb-2 block"
                style={{ color: "#00d9a3" }}
              >
                {i === 0 ? "Destaque" : i === 1 ? "Especialidade" : "Coleção"}
              </span>
              <h3
                className="font-bold text-xl mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#f5f5f5" }}
              >
                {card.title}
              </h3>
              <p className="text-xs mb-5" style={{ color: "#666" }}>
                {card.sub}
              </p>
              <span
                className="inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-wider px-5 py-2 rounded-sm"
                style={{
                  backgroundColor: "#00d9a3",
                  color: "#0a0a0a",
                  transition: "background-color 0.2s",
                }}
              >
                {card.cta}
                <FaChevronRight size={9} />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ══ 6. VITRINE DE PRODUTOS ══ */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "60px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              O melhor da nossa{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00d9a3, #00b88a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                loja!
              </span>
            </h2>
            <span
              className="text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-default"
              style={{ color: "#555" }}
            >
              Em breve <FaChevronRight size={10} />
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col rounded-sm overflow-hidden"
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid #1a1a1a",
                }}
              >
                {/* Imagem placeholder */}
                <div
                  className="relative flex items-center justify-center"
                  style={{ backgroundColor: "#1a1a1a", height: "160px" }}
                >
                  {p.tag && (
                    <span
                      className="absolute top-2 left-2 text-[10px] font-bold uppercase px-2 py-1 rounded-sm"
                      style={{
                        backgroundColor:
                          p.tag === "Oferta" ? "#ef4444" : "#00d9a3",
                        color: p.tag === "Oferta" ? "#fff" : "#0a0a0a",
                      }}
                    >
                      {p.tag}
                    </span>
                  )}
                  <span className="text-4xl opacity-20">🛒</span>
                </div>

                <div className="p-4 flex flex-col gap-2 flex-1">
                  <p
                    className="text-xs font-medium leading-snug"
                    style={{ color: "#ccc" }}
                  >
                    {p.name}
                  </p>
                  <p
                    className="text-base font-bold mt-auto"
                    style={{ color: "#f5f5f5" }}
                  >
                    {p.price}
                  </p>
                  <span
                    className="w-full py-2 text-xs font-bold uppercase tracking-wider rounded-sm mt-1 text-center cursor-default"
                    style={{ backgroundColor: "#1a1a1a", color: "#555", display: "block" }}
                  >
                    Em breve
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. NEWSLETTER / AVISO ══ */}
      <section
        style={{ backgroundColor: "#00d9a3", padding: "48px 24px" }}
      >
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: "rgba(0,0,0,0.5)" }}
            >
              Fique por dentro
            </p>
            <h3
              className="text-xl font-bold"
              style={{ color: "#0a0a0a", fontFamily: "'Playfair Display', serif" }}
            >
              Loja online chegando em breve!
            </h3>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold uppercase tracking-wider px-6 py-3 text-xs rounded-sm"
              style={{
                backgroundColor: "#0a0a0a",
                color: "#00d9a3",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaWhatsapp size={14} /> WhatsApp
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold uppercase tracking-wider px-6 py-3 text-xs rounded-sm"
              style={{
                backgroundColor: "rgba(0,0,0,0.15)",
                color: "#0a0a0a",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <FaInstagram size={14} /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ══ 8. FOOTER ══ */}
      <footer style={{ backgroundColor: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
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
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#555" }}>
              Aqui você encontra os melhores produtos. Preços acessíveis e condições de pagamento facilitadas.
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

          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#f5f5f5" }}>Categorias</p>
            <ul className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <span className="text-xs flex items-center gap-1 cursor-default" style={{ color: "#555" }}>
                    <FaChevronRight size={8} /> {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#f5f5f5" }}>Contato</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{ color: "#555" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                >
                  <FaWhatsapp size={14} style={{ color: "#22c55e" }} />
                  (19) 99132-3263
                </a>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{ color: "#555" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                >
                  <FaInstagram size={14} style={{ color: "#00d9a3" }} />
                  @rick_tattoo_019
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1a1a1a", padding: "16px 24px" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs" style={{ color: "#333" }}>
              © {new Date().getFullYear()} — Todos os direitos reservados
            </p>
            <p className="text-xs" style={{ color: "#333" }}>
              Campinas – SP · (19) 99132-3263
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
