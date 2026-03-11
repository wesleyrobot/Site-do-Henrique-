"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaInstagram, FaWhatsapp, FaClock, FaPhone } from "react-icons/fa";

const WHATSAPP = "https://wa.me/5519991323263";
const WHATSAPP_MSG = "https://wa.me/5519991323263?text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20de%20tatuagem.";
const INSTAGRAM = "https://www.instagram.com/rick_tattoo_019?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const contactInfo = [
  {
    icon: FaPhone,
    title: "WhatsApp",
    lines: ["(19) 99132-3263"],
    href: WHATSAPP,
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    lines: ["@rick_tattoo_019"],
    href: INSTAGRAM,
  },
  {
    icon: FaClock,
    title: "Horário",
    lines: ["Seg – Sex: 10h às 20h", "Sáb: 10h às 18h"],
    href: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contato" className="section-padding bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-[0.3em] mb-4"
          >
            Fale Conosco
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Agende Sua <span className="gradient-text">Sessão</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-0.5 bg-primary mx-auto mt-6"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Contact info */}
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-muted text-[15px] leading-relaxed mb-10"
            >
              Pronto para sua próxima tatuagem? Manda uma mensagem no WhatsApp e vamos
              conversar sobre sua ideia. O agendamento é feito diretamente pelo WhatsApp.
            </motion.p>

            {/* Contact info */}
            <div className="flex flex-col gap-5 mb-10">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 group/item"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors duration-200">
                        <info.icon className="text-primary" size={16} />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-1">{info.title}</p>
                        {info.lines.map((line) => (
                          <p key={line} className="text-muted text-sm group-hover/item:text-primary transition-colors duration-200">
                            {line}
                          </p>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <info.icon className="text-primary" size={16} />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-1">{info.title}</p>
                        {info.lines.map((line) => (
                          <p key={line} className="text-muted text-sm">{line}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center p-10 border border-white/5 bg-dark-3 rounded-sm"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
              <FaWhatsapp className="text-green-400" size={40} />
            </div>

            <h3 className="text-white text-2xl font-bold mb-3">
              Agende pelo WhatsApp
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-8 max-w-xs">
              Clique no botão abaixo, envie uma mensagem com sua ideia e o Henrique
              vai te responder para agendar sua sessão.
            </p>

            <motion.a
              href={WHATSAPP_MSG}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-green-500 text-white font-bold uppercase tracking-wider px-10 py-4 text-sm hover:bg-green-600 transition-colors duration-200 w-full justify-center rounded-sm"
            >
              <FaWhatsapp size={20} />
              Chamar no WhatsApp
            </motion.a>

            <p className="text-muted text-xs mt-4">(19) 99132-3263</p>

            <div className="w-full h-px bg-white/5 my-6" />

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted text-sm hover:text-primary transition-colors duration-200"
            >
              <FaInstagram size={16} />
              Veja nosso Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
