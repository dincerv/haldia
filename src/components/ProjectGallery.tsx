"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type ProjectGalleryProps = {
  images: string[];
  title: string;
  enlargeLabel: string;
  lightboxLabels: {
    close: string;
    prev: string;
    next: string;
  };
};

export default function ProjectGallery({
  images,
  title,
  enlargeLabel,
  lightboxLabels,
}: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => openAt(i)}
            className={`group relative overflow-hidden bg-cream-dark ${
              i === 0
                ? "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-[420px]"
                : "aspect-[4/3]"
            }`}
          >
            <Image
              src={src}
              alt={`${title} — ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes={
                i === 0
                  ? "(max-width: 640px) 100vw, 66vw"
                  : "(max-width: 640px) 100vw, 33vw"
              }
              priority={i < 2}
            />
            <div className="absolute inset-0 bg-forest-deep/0 transition-colors group-hover:bg-forest-deep/25" />
            <span className="absolute bottom-3 right-3 bg-forest-deep/70 px-2 py-1 text-[10px] font-semibold tracking-wider text-white uppercase opacity-100 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
              {enlargeLabel}
            </span>
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={index}
        alt={title}
        open={open}
        onClose={() => setOpen(false)}
        onChange={setIndex}
        labels={lightboxLabels}
      />
    </>
  );
}
