"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type LightboxProps = {
  images: string[];
  index: number;
  alt: string;
  open: boolean;
  onClose: () => void;
  onChange: (index: number) => void;
  labels: {
    close: string;
    prev: string;
    next: string;
  };
};

export default function Lightbox({
  images,
  index,
  alt,
  open,
  onClose,
  onChange,
  labels,
}: LightboxProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        onChange((index - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, images.length, onClose, onChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-forest-deep/96 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-4 pt-[max(1rem,env(safe-area-inset-top))] pb-2">
            <p className="text-sm text-white/70">
              {index + 1} / {images.length}
            </p>
            <button
              type="button"
              aria-label={labels.close}
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20"
            >
              <X size={22} />
            </button>
          </div>

          <div
            className="relative mx-auto flex min-h-0 w-full flex-1 items-center justify-center px-2 sm:px-14"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label={labels.prev}
              className="absolute left-1 z-10 flex h-11 w-11 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 sm:left-2"
              onClick={() =>
                onChange((index - 1 + images.length) % images.length)
              }
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              aria-label={labels.next}
              className="absolute right-1 z-10 flex h-11 w-11 items-center justify-center rounded-sm bg-white/10 text-white hover:bg-white/20 sm:right-2"
              onClick={() => onChange((index + 1) % images.length)}
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={images[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-[70svh] w-full max-w-6xl sm:h-[78vh]"
            >
              <Image
                src={images[index]}
                alt={`${alt} — ${index + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:hidden">
            <button
              type="button"
              className="min-h-11 flex-1 rounded-sm bg-white/10 text-sm font-medium text-white"
              onClick={(e) => {
                e.stopPropagation();
                onChange((index - 1 + images.length) % images.length);
              }}
            >
              {labels.prev}
            </button>
            <button
              type="button"
              className="min-h-11 flex-1 rounded-sm bg-white/10 text-sm font-medium text-white"
              onClick={(e) => {
                e.stopPropagation();
                onChange((index + 1) % images.length);
              }}
            >
              {labels.next}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
