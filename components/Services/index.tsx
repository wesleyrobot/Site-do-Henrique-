"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPaintBrush,
  FaLeaf,
  FaCircle,
  FaWater,
  FaUser,
  FaRedo,
} from "react-icons/fa";

const services = [
  {
    icon: FaPaintBrush,
    title: "Black & Grey",
    description:
      "A técnica clássica que usa apenas tinta preta em diferentes saturações, criando profundidade e realismo impressionantes.",
    popular: false,
  },
  {
    icon: FaWater,
    title: "Aquarela",
    description:
      "Estilo vibrante que imita a técnica de aquarela em papel, com cores fluidas e bordas suaves que parecem pinturas vivas.",
    popular: true,
  },
  {
    icon: FaCircle,
    title: "Geométrico",
    description:
      "Precisão matemática e formas simétricas criam padrões únicos. Perfeito para quem busca design moderno e impactante.",
    popular: false,
  },
  {
    icon: FaLeaf,
    title: "Fineline",
    description:
      "Traços ultra-finos e delicados para designs minimalistas e sofisticados. Botanica, ornamental e muito mais.",
    popular: false,
  },
  {
    icon: FaUser,
    title: "Realismo",
    description:
      "Retratos e natureza morta com detalhes fotográficos. Nossa especialidade são rostos e animais hiper-realistas.",
    popular: false,
  },
  {
    icon: FaRedo,
    title: "Cover-up",
    description:
      "Transformamos tatuagens antigas em novas obras de arte. Estudo personalizado para o melhor resultado.",
    popular: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="servicos" className="section-padding bg-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-primary/40 to-transparent" />
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent to-primary/20" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-[0.3em] mb-4"
          >
            O Que Oferecemos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nossos <span className="gradient-text">Serviços</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted mt-4 max-w-xl mx-auto text-[15px]"
          >
            Especializados em múltiplos estilos para atender qualquer visão artística.
            Cada sessão começa com uma consulta gratuita.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-0.5 bg-primary mx-auto mt-6"
          />
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`relative group p-5 md:p-8 rounded-sm border transition-all duration-300 cursor-default ${
                service.popular
                  ? "border-primary/40 bg-dark-3"
                  : "border-white/5 bg-dark-3 hover:border-primary/20"
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-primary text-dark text-xs font-bold uppercase tracking-wider px-3 py-1">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-sm flex items-center justify-center mb-6 transition-colors duration-300 ${
                  service.popular
                    ? "bg-primary/20"
                    : "bg-white/5 group-hover:bg-primary/10"
                }`}
              >
                <service.icon
                  className={`transition-colors duration-300 ${
                    service.popular ? "text-primary" : "text-white/40 group-hover:text-primary"
                  }`}
                  size={24}
                />
              </div>

              <h3 className="text-white font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">{service.description}</p>

              <div className="w-full h-px bg-white/5 mb-5" />

              <button
                onClick={() => {
                  const el = document.querySelector("#contato");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs text-muted hover:text-primary transition-colors duration-200 uppercase tracking-wider"
              >
                Agendar →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10 p-5 md:p-8 border border-primary/10 rounded-sm bg-dark-3 max-w-2xl mx-auto"
        >
          <h3 className="text-white text-xl font-semibold mb-3">
            Tem uma ideia personalizada?
          </h3>
          <p className="text-muted text-sm mb-6">
            Entre em contato para uma consulta gratuita. Vamos transformar sua visão em arte!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const el = document.querySelector("#contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary text-dark font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-primary-dark transition-colors duration-200"
          >
            Consulta Gratuita
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
