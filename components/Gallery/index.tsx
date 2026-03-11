"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { FaTimes, FaExpand, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const galleryItems = [
  { id: 1, image: "/tattoos/tattoo-1.jpg" },
  { id: 2, image: "/tattoos/tattoo-2.jpg" },
  { id: 3, image: "/tattoos/tattoo-3.jpg" },
  { id: 4, image: "/tattoos/tattoo-4.jpg" },
  { id: 5, image: "/tattoos/tattoo-5.jpg" },
  { id: 6, image: "/tattoos/tattoo-6.jpg" },
  { id: 7, image: "/tattoos/tattoo-7.jpg" },
  { id: 8, image: "/tattoos/tattoo-8.jpg" },
  { id: 9, image: "/tattoos/tattoo-9.jpg" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = galleryItems;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + filtered.length) % filtered.length : null
    );
  const nextImage = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % filtered.length : null
    );

  return (
    <section id="portfolio" className="section-padding bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-custom" ref={ref}>
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium uppercase tracking-[0.3em] mb-4"
          >
            Nosso Trabalho
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Galeria de <span className="gradient-text">Portfólio</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-0.5 bg-primary mx-auto mt-6"
          />
        </div>

        {/* Swiper Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
            grabCursor
            centeredSlides
            slidesPerView="auto"
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: ".swiper-btn-prev", nextEl: ".swiper-btn-next" }}
            className="pb-14"
          >
            {filtered.map((item, i) => (
              <SwiperSlide
                key={item.id}
                style={{ width: "clamp(200px, 70vw, 300px)", height: "clamp(270px, 55vw, 400px)" }}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="w-full h-full relative overflow-hidden rounded-sm bg-dark-3">
                  <Image
                    src={item.image}
                    alt="Tatuagem"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="300px"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaExpand className="text-primary" size={24} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav buttons */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button className="swiper-btn-prev w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-200">
              <FaChevronLeft size={16} />
            </button>
            <button className="swiper-btn-next w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-dark transition-all duration-200">
              <FaChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-dark-3">
                <Image
                  src={filtered[lightboxIndex].image}
                  alt="Tatuagem"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </div>

              {/* Controls */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 bg-dark/80 rounded-full flex items-center justify-center text-white hover:text-primary transition-colors"
              >
                <FaTimes size={16} />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark/80 rounded-full flex items-center justify-center text-white hover:text-primary transition-colors"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-dark/80 rounded-full flex items-center justify-center text-white hover:text-primary transition-colors"
              >
                <FaChevronRight size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
