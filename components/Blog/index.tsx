"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaClock, FaArrowRight } from "react-icons/fa";

const posts = [
  {
    tag: "Cuidados",
    title: "Como cuidar da sua tatuagem nos primeiros dias",
    excerpt:
      "Os primeiros 7 dias são fundamentais para a cicatrização. Saiba como hidratar, proteger e evitar infecções para garantir que sua tattoo fique perfeita.",
    readTime: "4 min",
    tips: ["Lave com sabão neutro 2x ao dia", "Aplique pomada cicatrizante fina", "Evite sol direto e piscina", "Não arranhe nem descasque"],
  },
  {
    tag: "Inspiração",
    title: "Estilos de tatuagem: qual combina com você?",
    excerpt:
      "Black & Grey, Aquarela, Fineline ou Realismo? Cada estilo conta uma história diferente. Descubra qual se encaixa melhor na sua personalidade.",
    readTime: "5 min",
    tips: ["Black & Grey: clássico e atemporal", "Aquarela: cores vibrantes e fluidas", "Fineline: delicado e minimalista", "Realismo: detalhes fotográficos"],
  },
  {
    tag: "Preparação",
    title: "Como se preparar antes de tatuar",
    excerpt:
      "Uma boa preparação faz toda a diferença no resultado. Veja o que fazer (e o que evitar) nas horas antes da sua sessão.",
    readTime: "3 min",
    tips: ["Durma bem na noite anterior", "Alimente-se antes da sessão", "Evite álcool 24h antes", "Use roupas confortáveis"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
  }),
};

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="blog" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-[0.3em] mb-4"
          >
            Dicas & Inspirações
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nosso <span className="gradient-text">Blog</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-0.5 bg-primary mx-auto mt-6"
          />
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="group bg-dark-3 border border-white/5 hover:border-primary/20 rounded-sm p-6 transition-all duration-300 flex flex-col"
            >
              {/* Tag + read time */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-sm">
                  {post.tag}
                </span>
                <span className="flex items-center gap-1 text-muted text-xs">
                  <FaClock size={11} />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>

              {/* Tips list */}
              <ul className="space-y-2 mb-6">
                {post.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {tip}
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-white/5 mb-4" />

              <button
                onClick={() => {
                  const el = document.querySelector("#contato");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 text-xs text-muted hover:text-primary transition-colors duration-200 uppercase tracking-wider"
              >
                Agendar consulta <FaArrowRight size={11} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
