"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaArrowUp } from "react-icons/fa";

const navSections = [
  {
    title: "Navegação",
    links: [
      { label: "Sobre", href: "#sobre" },
      { label: "Serviços", href: "#servicos" },
      { label: "Artistas", href: "#artistas" },
      { label: "Portfólio", href: "#portfolio" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Black & Grey", href: "#servicos" },
      { label: "Aquarela", href: "#servicos" },
      { label: "Geométrico", href: "#servicos" },
      { label: "Fineline", href: "#servicos" },
      { label: "Realismo", href: "#servicos" },
    ],
  },
];

const socials = [
  { icon: FaInstagram, href: "https://www.instagram.com/rick_tattoo_019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
  { icon: FaWhatsapp, href: "https://wa.me/5519991323263", label: "WhatsApp" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-dark border-t border-white/5 relative">
      {/* Top gradient line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container-custom py-10 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo2.jpg"
                alt="Rick Tattoo"
                width={220}
                height={110}
                className="h-24 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Estúdio de tatuagem profissional dedicado à excelência artística.
              Transformamos sua visão em obras de arte permanentes desde 2015.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 border border-white/10 rounded-sm flex items-center justify-center text-muted hover:text-primary hover:border-primary/40 transition-all duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav sections */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted text-sm hover:text-primary transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mt-12 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Rick Tattoo. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted text-xs hover:text-primary transition-colors duration-200">
              Privacidade
            </a>
            <a href="#" className="text-muted text-xs hover:text-primary transition-colors duration-200">
              Termos
            </a>
            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-200 ml-2"
              aria-label="Voltar ao topo"
            >
              <FaArrowUp size={12} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
