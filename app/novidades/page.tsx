"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaInstagram, FaWhatsapp, FaBars, FaUser,
  FaShoppingCart, FaSearch, FaChevronRight,
  FaTimes, FaStar, FaTag, FaTruck, FaShieldAlt,
  FaHeadset, FaPlus, FaMinus, FaTrash,
} from "react-icons/fa";

const WHATSAPP_BASE = "https://wa.me/5519991323263?text=";
const INSTAGRAM = "https://www.instagram.com/rick_tattoo_019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const categories = [
  "Charutos", "Cachimbos", "Narguilés", "Sedas",
  "Isqueiros", "Acessórios", "Bongs", "Head Shop", "Zippo", "Cinzeiros",
];

type Product = {
  name: string; price: string; old: string | null;
  tag: string | null; stars: number; img: string;
};

const products: Product[] = [
  { name: "Charuto Cohiba Especial", price: "R$ 89,90", old: "R$ 109,90", tag: "Oferta", stars: 5,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80" },
  { name: "Cachimbo Artesanal Briar", price: "R$ 149,90", old: null, tag: "Novo", stars: 5,
    img: "https://images.unsplash.com/photo-1516585427167-0b62e1a93434?w=400&h=300&fit=crop&q=80" },
  { name: "Seda OCB Organic King Size", price: "R$ 8,90", old: null, tag: null, stars: 4,
    img: "https://images.unsplash.com/photo-1574068468669-71ef3b8a1590?w=400&h=300&fit=crop&q=80" },
  { name: "Cinzeiro Cristal Premium", price: "R$ 45,90", old: "R$ 59,90", tag: "Oferta", stars: 4,
    img: "https://images.unsplash.com/photo-1543723870-bab9c82a0027?w=400&h=300&fit=crop&q=80" },
  { name: "Isqueiro Zippo Classic", price: "R$ 199,90", old: null, tag: "Novo", stars: 5,
    img: "https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=400&h=300&fit=crop&q=80" },
  { name: "Kit Narguilé Completo", price: "R$ 320,00", old: "R$ 389,00", tag: "Oferta", stars: 5,
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80" },
  { name: "Bong Acrílico Grafitado", price: "R$ 79,90", old: null, tag: null, stars: 4,
    img: "https://images.unsplash.com/photo-1567427014523-b89b5e0e1e5e?w=400&h=300&fit=crop&q=80" },
  { name: "Caixa Umidora 25 Charutos", price: "R$ 189,00", old: null, tag: "Destaque", stars: 5,
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop&q=80" },
  { name: "Rosh Bowl Cerâmica", price: "R$ 34,90", old: "R$ 44,90", tag: "Oferta", stars: 4,
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&q=80" },
  { name: "Seda Smoking Rasta 1¼", price: "R$ 6,90", old: null, tag: null, stars: 4,
    img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&h=300&fit=crop&q=80" },
  { name: "Case Organizador Premium", price: "R$ 89,00", old: null, tag: "Novo", stars: 5,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop&q=80" },
  { name: "Prato Zenith Crown", price: "R$ 49,90", old: "R$ 64,90", tag: "Oferta", stars: 4,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80" },
];

const destaques = [
  { title: "Charutos Premium", sub: "Sabor, qualidade e sofisticação para os mais exigentes apreciadores",
    cta: "Peça pelo WhatsApp", bg: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)", emoji: "🍂" },
  { title: "Acessórios para Narguilé", sub: "Os melhores equipamentos, mangueiras e essências disponíveis",
    cta: "Ver acessórios", bg: "linear-gradient(135deg, #0d0d0d 0%, #161616 100%)", emoji: "💨" },
  { title: "Isqueiros Zippo", sub: "Coleção especial de isqueiros icônicos e exclusivos",
    cta: "Ver coleção", bg: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)", emoji: "🔥" },
];

const vantagens = [
  { icon: FaTruck, title: "Enviamos para todo o Brasil", sub: "Frete rápido e seguro" },
  { icon: FaShieldAlt, title: "Compra 100% Segura", sub: "Produtos originais garantidos" },
  { icon: FaHeadset, title: "Atendimento pelo WhatsApp", sub: "Resposta rápida sempre" },
  { icon: FaTag, title: "Melhores Preços", sub: "Condições de pagamento facilitadas" },
];

type CartItem = Product & { qty: number };

function parsePrice(p: string) {
  return parseFloat(p.replace("R$ ", "").replace(".", "").replace(",", "."));
}

export default function NovidadesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [addedName, setAddedName] = useState<string | null>(null);

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + parsePrice(i.price) * i.qty, 0);

  function addToCart(p: Product) {
    setCart((prev) => {
      const exists = prev.find((c) => c.name === p.name);
      if (exists) return prev.map((c) => c.name === p.name ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...p, qty: 1 }];
    });
    setAddedName(p.name);
    setTimeout(() => setAddedName(null), 1800);
  }

  function updateQty(name: string, delta: number) {
    setCart((prev) =>
      prev.map((c) => c.name === name ? { ...c, qty: Math.max(1, c.qty + delta) } : c)
    );
  }

  function removeItem(name: string) {
    setCart((prev) => prev.filter((c) => c.name !== name));
  }

  function buildWhatsAppMsg() {
    let msg = "Olá! Gostaria de fazer o seguinte pedido:\n\n";
    cart.forEach((c) => {
      msg += `• ${c.qty}x ${c.name} — ${c.price}\n`;
    });
    msg += `\n*Total estimado: R$ ${totalPrice.toFixed(2).replace(".", ",")}*`;
    msg += "\n\nAguardo confirmação. 😊";
    return WHATSAPP_BASE + encodeURIComponent(msg);
  }

  return (
    <div style={{ backgroundColor: "#0a0a0a", color: "#f5f5f5", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>

      {/* ── BARRA SUPERIOR ── */}
      <div className="text-center py-2 text-xs font-bold tracking-widest" style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}>
        ~ Enviamos para todo o Brasil! Novidades chegando em breve ~
      </div>

      {/* ── HEADER ── */}
      <header style={{ backgroundColor: "#111111", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <a href="/" className="flex-shrink-0">
            <Image src="/logo2.jpg" alt="Logo" width={180} height={90}
              className="h-14 w-auto object-contain" style={{ mixBlendMode: "screen" }} />
          </a>

          {/* Busca */}
          <div className="flex-1 hidden md:flex items-center rounded-sm overflow-hidden"
            style={{ border: "1px solid #222", backgroundColor: "#1a1a1a" }}>
            <input type="text" placeholder="Procure seu produto aqui..." readOnly
              className="flex-1 px-5 py-3 text-sm bg-transparent outline-none cursor-default" style={{ color: "#555" }} />
            <div className="px-5 py-3 flex items-center justify-center" style={{ backgroundColor: "#00d9a3" }}>
              <FaSearch size={14} style={{ color: "#0a0a0a" }} />
            </div>
          </div>

          {/* Ícones */}
          <div className="flex items-center gap-5 ml-auto md:ml-0">
            <a href={`https://wa.me/5519991323263?text=Olá!%20Gostaria%20de%20mais%20informações.`}
              target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 transition-opacity hover:opacity-70">
              <FaWhatsapp size={22} style={{ color: "#22c55e" }} />
              <span className="text-[10px] hidden md:block" style={{ color: "#888" }}>Suporte</span>
            </a>
            <div className="flex flex-col items-center gap-1 cursor-default">
              <FaUser size={20} style={{ color: "#888" }} />
              <span className="text-[10px] hidden md:block" style={{ color: "#888" }}>Conta</span>
            </div>

            {/* Carrinho clicável */}
            <button onClick={() => setCartOpen(true)}
              className="flex flex-col items-center gap-1 relative transition-opacity hover:opacity-80">
              <FaShoppingCart size={21} style={{ color: "#f5f5f5" }} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#ef4444", color: "#fff" }}>
                  {totalItems}
                </span>
              )}
              {totalItems === 0 && (
                <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center"
                  style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}>0</span>
              )}
              <span className="text-[10px] hidden md:block" style={{ color: "#888" }}>Carrinho</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── NAVBAR ── */}
      <nav style={{ backgroundColor: "#1a1a1a", borderBottom: "1px solid #222", position: "relative", zIndex: 40 }}>
        <div className="max-w-7xl mx-auto px-0 flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-5 py-4 font-bold text-xs uppercase tracking-widest flex-shrink-0"
            style={{ backgroundColor: "#00d9a3", color: "#0a0a0a", borderRight: "1px solid rgba(0,0,0,0.12)" }}>
            {menuOpen ? <FaTimes size={13} /> : <FaBars size={13} />}
            <span>Mais Categorias</span>
          </button>
          <div className="flex items-center overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {categories.map((cat) => (
              <span key={cat}
                className="px-5 py-4 text-xs font-semibold uppercase tracking-wider whitespace-nowrap border-r cursor-default select-none"
                style={{ color: "#777", borderColor: "#222" }}>
                {cat}
              </span>
            ))}
          </div>
        </div>
        {menuOpen && (
          <div className="absolute left-0 w-60 py-1 shadow-2xl"
            style={{ top: "100%", backgroundColor: "#111", border: "1px solid #1a1a1a" }}>
            {categories.map((cat) => (
              <span key={cat}
                className="flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-wider cursor-default select-none"
                style={{ color: "#777", borderBottom: "1px solid #1a1a1a", display: "flex" }}>
                <FaChevronRight size={8} style={{ color: "#00d9a3" }} />{cat}
              </span>
            ))}
          </div>
        )}
      </nav>

      {/* ── CARRINHO LATERAL ── */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Overlay */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 z-50" style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(2px)" }} />

            {/* Drawer */}
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full z-50 flex flex-col"
              style={{ width: "min(420px, 100vw)", backgroundColor: "#111111", borderLeft: "1px solid #1a1a1a" }}>

              {/* Header carrinho */}
              <div className="flex items-center justify-between px-6 py-5"
                style={{ borderBottom: "1px solid #1a1a1a" }}>
                <div className="flex items-center gap-3">
                  <FaShoppingCart size={18} style={{ color: "#00d9a3" }} />
                  <span className="font-bold text-base uppercase tracking-wider">Carrinho</span>
                  {totalItems > 0 && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-sm"
                      style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}>
                      {totalItems} {totalItems === 1 ? "item" : "itens"}
                    </span>
                  )}
                </div>
                <button onClick={() => setCartOpen(false)}
                  className="p-2 rounded-sm transition-colors duration-200 hover:bg-white/5">
                  <FaTimes size={16} style={{ color: "#888" }} />
                </button>
              </div>

              {/* Itens */}
              <div className="flex-1 overflow-y-auto px-6 py-4" style={{ scrollbarWidth: "thin" }}>
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4" style={{ color: "#555" }}>
                    <FaShoppingCart size={48} />
                    <p className="text-sm font-medium">Seu carrinho está vazio</p>
                    <p className="text-xs text-center">Adicione produtos para montar seu pedido</p>
                    <button onClick={() => setCartOpen(false)}
                      className="text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-sm mt-2 transition-colors duration-200"
                      style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}>
                      Ver produtos
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {cart.map((item) => (
                      <div key={item.name} className="flex gap-3 pb-4" style={{ borderBottom: "1px solid #1a1a1a" }}>
                        {/* Thumb */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.img} alt={item.name}
                          className="rounded-sm object-cover flex-shrink-0"
                          style={{ width: 64, height: 64, filter: "brightness(0.85)" }} />

                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold leading-snug mb-2" style={{ color: "#ccc" }}>{item.name}</p>
                          <p className="text-sm font-bold mb-3" style={{ color: "#00d9a3" }}>{item.price}</p>

                          {/* Seletor de quantidade */}
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateQty(item.name, -1)}
                              className="w-7 h-7 flex items-center justify-center rounded-sm transition-colors duration-200"
                              style={{ backgroundColor: "#1a1a1a", border: "1px solid #222" }}
                              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#00d9a3")}
                              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#222")}>
                              <FaMinus size={9} style={{ color: "#888" }} />
                            </button>
                            <span className="text-sm font-bold w-6 text-center" style={{ color: "#f5f5f5" }}>
                              {item.qty}
                            </span>
                            <button onClick={() => updateQty(item.name, 1)}
                              className="w-7 h-7 flex items-center justify-center rounded-sm transition-colors duration-200"
                              style={{ backgroundColor: "#1a1a1a", border: "1px solid #222" }}
                              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#00d9a3")}
                              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#222")}>
                              <FaPlus size={9} style={{ color: "#888" }} />
                            </button>

                            <span className="text-xs ml-1" style={{ color: "#555" }}>
                              = R$ {(parsePrice(item.price) * item.qty).toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                        </div>

                        {/* Remover */}
                        <button onClick={() => removeItem(item.name)}
                          className="flex-shrink-0 p-1.5 rounded-sm transition-colors duration-200 self-start"
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}>
                          <FaTrash size={12} style={{ color: "inherit" }} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer carrinho */}
              {cart.length > 0 && (
                <div className="px-6 py-5" style={{ borderTop: "1px solid #1a1a1a" }}>
                  {/* Subtotal */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs uppercase tracking-wider" style={{ color: "#888" }}>Subtotal</span>
                    <span className="text-xs" style={{ color: "#888" }}>
                      {totalItems} {totalItems === 1 ? "item" : "itens"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-5">
                    <span className="text-lg font-bold" style={{ color: "#f5f5f5" }}>Total estimado</span>
                    <span className="text-xl font-bold" style={{ color: "#00d9a3" }}>
                      R$ {totalPrice.toFixed(2).replace(".", ",")}
                    </span>
                  </div>

                  {/* Botão comprar pelo WhatsApp */}
                  <a href={buildWhatsAppMsg()} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 font-bold uppercase tracking-wider text-sm rounded-sm transition-colors duration-200"
                    style={{ backgroundColor: "#22c55e", color: "#fff" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}>
                    <FaWhatsapp size={18} />
                    Enviar Pedido pelo WhatsApp
                  </a>

                  <p className="text-center text-xs mt-3" style={{ color: "#555" }}>
                    Você será redirecionado para o WhatsApp com seu pedido completo
                  </p>

                  <button onClick={() => setCart([])}
                    className="w-full text-xs text-center mt-3 py-2 transition-colors duration-200"
                    style={{ color: "#555" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ef4444")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}>
                    Limpar carrinho
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toast "adicionado" */}
      <AnimatePresence>
        {addedName && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-2xl"
            style={{ backgroundColor: "#00d9a3", color: "#0a0a0a", whiteSpace: "nowrap" }}>
            <FaShoppingCart size={14} />
            <span className="text-sm font-bold">Adicionado ao carrinho!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── HERO BANNER ── */}
      <section style={{ minHeight: "460px", display: "flex", alignItems: "center", backgroundColor: "#0d0d0d", position: "relative", overflow: "hidden" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 80% at 70% 50%, rgba(0,217,163,0.08) 0%, transparent 65%)" }} />
        {[380, 260, 160].map((s, i) => (
          <div key={i} className="absolute hidden lg:block pointer-events-none rounded-full"
            style={{ width: s, height: s, right: 80, top: "50%", transform: "translateY(-50%)", border: `1px solid rgba(0,217,163,${0.04 + i * 0.03})` }} />
        ))}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm mb-5"
              style={{ backgroundColor: "rgba(0,217,163,0.1)", border: "1px solid rgba(0,217,163,0.2)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#00d9a3" }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#00d9a3" }}>Em Breve</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: "bold", lineHeight: 1.1, marginBottom: 16 }}>
              Aqui na nossa loja você encontra os{" "}
              <span style={{ background: "linear-gradient(135deg,#00d9a3,#00b88a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Melhores Produtos!
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              style={{ color: "#888", fontSize: "1rem", marginBottom: 6 }}>
              Preços acessíveis e condições de pagamento facilitadas.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              style={{ color: "#555", fontSize: "0.85rem", marginBottom: 36 }}>
              Monte seu carrinho e envie o pedido pelo WhatsApp!
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3">
              <motion.button onClick={() => setCartOpen(true)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 font-bold uppercase tracking-wider px-8 py-4 text-sm rounded-sm"
                style={{ backgroundColor: "#00d9a3", color: "#0a0a0a", transition: "background-color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00b88a")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00d9a3")}>
                <FaShoppingCart size={16} /> Ver Carrinho
              </motion.button>
              <motion.a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 font-semibold uppercase tracking-wider px-8 py-4 text-sm rounded-sm"
                style={{ border: "1px solid #2a2a2a", color: "#888", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#00d9a3"; e.currentTarget.style.color = "#00d9a3"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.color = "#888"; }}>
                <FaInstagram size={16} /> Instagram
              </motion.a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          <div style={{ width: 24, height: 8, backgroundColor: "#00d9a3", borderRadius: 4 }} />
          <div style={{ width: 8, height: 8, backgroundColor: "#2a2a2a", borderRadius: 99 }} />
        </div>
      </section>

      {/* ── VANTAGENS ── */}
      <section style={{ backgroundColor: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4" style={{ borderLeft: "1px solid #1a1a1a" }}>
          {vantagens.map((v) => (
            <div key={v.title} className="flex items-center gap-4 p-6"
              style={{ borderRight: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
              <v.icon size={22} style={{ color: "#00d9a3", flexShrink: 0 }} />
              <div>
                <p className="text-xs font-bold" style={{ color: "#f5f5f5" }}>{v.title}</p>
                <p className="text-xs mt-0.5" style={{ color: "#555" }}>{v.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3 BANNERS ── */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3px", backgroundColor: "#222" }}
        className="grid-cols-1 md:grid-cols-3">
        {destaques.map((d, i) => (
          <motion.div key={d.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="relative flex flex-col justify-end overflow-hidden"
            style={{ background: d.bg, minHeight: "240px", padding: "32px 28px 28px", border: "1px solid #1a1a1a" }}>
            <div className="absolute top-4 right-4 text-5xl opacity-15 select-none">{d.emoji}</div>
            <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(0,217,163,0.06),transparent 70%)", transform: "translate(25%,-25%)" }} />
            <span className="text-xs font-bold uppercase tracking-widest mb-2 block" style={{ color: "#00d9a3" }}>
              {i === 0 ? "Destaque" : i === 1 ? "Especialidade" : "Coleção"}
            </span>
            <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{d.title}</h3>
            <p className="text-xs mb-5 leading-relaxed" style={{ color: "#666" }}>{d.sub}</p>
            <span className="inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm"
              style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}>
              {d.cta} <FaChevronRight size={9} />
            </span>
          </motion.div>
        ))}
      </section>

      {/* ── VITRINE ── */}
      <section style={{ backgroundColor: "#0a0a0a", padding: "64px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#00d9a3" }}>Catálogo</p>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                O melhor da nossa{" "}
                <span style={{ background: "linear-gradient(135deg,#00d9a3,#00b88a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Loja!
                </span>
              </h2>
            </div>
            <span className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm cursor-default"
              style={{ border: "1px solid #1a1a1a", color: "#555" }}>
              Em Breve <FaChevronRight size={10} />
            </span>
          </div>
          <div className="w-12 h-0.5 mb-10" style={{ backgroundColor: "#00d9a3" }} />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col rounded-sm overflow-hidden group"
                style={{ backgroundColor: "#111111", border: "1px solid #1a1a1a", transition: "border-color 0.2s, transform 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2a2a2a"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.transform = "translateY(0)"; }}>

                <div className="relative overflow-hidden" style={{ height: "180px", backgroundColor: "#161616" }}>
                  {p.tag && (
                    <span className="absolute top-2 left-2 text-[10px] font-bold uppercase px-2 py-1 rounded-sm z-10"
                      style={{ backgroundColor: p.tag === "Oferta" ? "#ef4444" : p.tag === "Novo" ? "#00d9a3" : "#f59e0b", color: p.tag === "Destaque" ? "#0a0a0a" : "#fff" }}>
                      {p.tag}
                    </span>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ filter: "brightness(0.85)" }} />
                  <div className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }}>
                    <button onClick={() => addToCart(p)}
                      className="text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-sm flex items-center gap-1"
                      style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}>
                      <FaPlus size={8} /> Adicionar
                    </button>
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-2 flex-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <FaStar key={s} size={10} style={{ color: s < p.stars ? "#f59e0b" : "#2a2a2a" }} />
                    ))}
                  </div>
                  <p className="text-xs font-medium leading-snug" style={{ color: "#ccc" }}>{p.name}</p>
                  <div className="mt-auto">
                    {p.old && <p className="text-xs line-through" style={{ color: "#555" }}>{p.old}</p>}
                    <p className="text-lg font-bold" style={{ color: p.old ? "#00d9a3" : "#f5f5f5" }}>{p.price}</p>
                    {p.old && (
                      <p className="text-[10px] font-bold" style={{ color: "#ef4444" }}>
                        Economize R$ {(parsePrice(p.old) - parsePrice(p.price)).toFixed(2).replace(".", ",")}
                      </p>
                    )}
                  </div>

                  {/* Botão Adicionar ao Carrinho */}
                  <button onClick={() => addToCart(p)}
                    className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm mt-1 transition-colors duration-200"
                    style={{ backgroundColor: "#1a1a1a", color: "#00d9a3", border: "1px solid #222" }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#00d9a3"; e.currentTarget.style.color = "#0a0a0a"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1a1a1a"; e.currentTarget.style.color = "#00d9a3"; }}>
                    <FaShoppingCart size={11} /> Adicionar ao Carrinho
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 font-bold uppercase tracking-wider px-10 py-4 text-sm rounded-sm cursor-default"
              style={{ backgroundColor: "#111111", color: "#555", border: "1px solid #1a1a1a" }}>
              🕐 Catálogo Completo em Breve
            </span>
          </div>
        </div>
      </section>

      {/* ── FAIXA ── */}
      <section style={{ backgroundColor: "#00d9a3", padding: "48px 24px" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(0,0,0,0.45)" }}>Loja Online</p>
            <h3 className="text-2xl font-bold mb-1" style={{ color: "#0a0a0a", fontFamily: "'Playfair Display', serif" }}>
              Monte seu pedido e envie pelo WhatsApp!
            </h3>
            <p className="text-sm" style={{ color: "rgba(0,0,0,0.55)" }}>Adicione ao carrinho e finalize direto no WhatsApp</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button onClick={() => setCartOpen(true)}
              className="flex items-center gap-2 font-bold uppercase tracking-wider px-7 py-3.5 text-sm rounded-sm"
              style={{ backgroundColor: "#0a0a0a", color: "#00d9a3", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
              <FaShoppingCart size={15} /> Ver Carrinho
              {totalItems > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-sm text-[10px] font-bold"
                  style={{ backgroundColor: "#00d9a3", color: "#0a0a0a" }}>
                  {totalItems}
                </span>
              )}
            </button>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold uppercase tracking-wider px-7 py-3.5 text-sm rounded-sm"
              style={{ backgroundColor: "rgba(0,0,0,0.15)", color: "#0a0a0a", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
              <FaInstagram size={15} /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#0d0d0d", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="/"><Image src="/logo2.jpg" alt="Logo" width={160} height={80} className="h-12 w-auto object-contain mb-5" style={{ mixBlendMode: "screen" }} /></a>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#555" }}>
              Aqui você encontra os melhores produtos com preços acessíveis e condições de pagamento facilitadas.
            </p>
            <div className="flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,217,163,0.1)", border: "1px solid #1a1a1a" }}>
                <FaInstagram size={14} style={{ color: "#00d9a3" }} />
              </a>
              <a href={`https://wa.me/5519991323263`} target="_blank" rel="noopener noreferrer"
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
                    <FaChevronRight size={8} style={{ color: "#00d9a3" }} /> {cat}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#f5f5f5" }}>Contato</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="https://wa.me/5519991323263" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200" style={{ color: "#555" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}>
                  <FaWhatsapp size={14} style={{ color: "#22c55e" }} /> (19) 99132-3263
                </a>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm transition-colors duration-200" style={{ color: "#555" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}>
                  <FaInstagram size={14} style={{ color: "#00d9a3" }} /> @rick_tattoo_019
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm" style={{ color: "#555" }}>
                  <FaTruck size={14} style={{ color: "#00d9a3" }} /> Enviamos para todo o Brasil
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1a1a1a", padding: "16px 24px" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs" style={{ color: "#333" }}>© {new Date().getFullYear()} — Todos os direitos reservados</p>
            <p className="text-xs" style={{ color: "#333" }}>Campinas – SP · (19) 99132-3263</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
