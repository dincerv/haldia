"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type ProjectCarouselProps = {
  images: string[];
  alt: string;
  /** Shared tick so all cards advance together */
  slideIndex: number;
  className?: string;
  sizes?: string;
};

export default function ProjectCarousel({
  images,
  alt,
  slideIndex,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: ProjectCarouselProps) {
  if (images.length === 0) {
    return <div className={`bg-cream-dark ${className}`} />;
  }

  const index = slideIndex % images.length;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${alt} — ${index + 1}`}
            fill
            className="object-cover"
            sizes={sizes}
          />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/40 via-transparent to-transparent" />
    </div>
  );
}
