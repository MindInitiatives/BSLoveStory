"use client";

import Image from "next/image";
import { useState } from "react";

const photos = [
  {
    src: "/photos/studio-standing.jpeg",
    alt: "Blessing and Stephen standing together in the studio",
  },
  {
    src: "/photos/traditional-embrace.jpeg",
    alt: "Blessing and Stephen in traditional dress",
  },
  {
    src: "/photos/studio-looking-back.jpeg",
    alt: "Stephen and Blessing looking back",
  },
  {
    src: "/photos/studio-standing-bw.jpeg",
    alt: "Blessing and Stephen standing together, black and white",
  },
  {
    src: "/photos/traditional-portrait.jpeg",
    alt: "Blessing and Stephen in matching aso ebi",
  },
  {
    src: "/photos/traditional-close.jpeg",
    alt: "Blessing resting on Stephen",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const next = () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null));

  return (
    <section id="gallery" className="section section--alt">
      <div className="shell">
        <div className="section__head">
          <p className="eyebrow">Gallery</p>
          <h2 className="section__title">A few of our favourites</h2>
          <p className="flourish">
            <span />
          </p>
        </div>

        <div className="grid">
          {photos.map((photo, index) => (
            <button
              key={index}
              type="button"
              className="grid__item"
              onClick={() => openLightbox(index)}
              aria-label={`View photo: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">
            ×
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative", width: "100%", height: "80svh" }}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </div>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
