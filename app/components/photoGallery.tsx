"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { PiCaretLeft, PiCaretRight, PiX } from "react-icons/pi";

const photos = [
  { src: "/images/0.jpeg", width: 1480, height: 987 },
  { src: "/images/1.jpeg", width: 1404, height: 936 },
  { src: "/images/2.jpeg", width: 1400, height: 935 },
  { src: "/images/3.jpeg", width: 2000, height: 1500 },
  { src: "/images/4.jpeg", width: 1800, height: 1015 },
  { src: "/images/6.jpeg", width: 1437, height: 868 },
];

export default function PhotoGallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const showPrev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const showNext = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length));

  useEffect(() => {
    if (openIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex]);

  const openPhoto = openIndex === null ? null : photos[openIndex];

  return (
    <>
      <div className="columns-2 gap-3 lg:gap-4">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            onClick={() => setOpenIndex(index)}
            className="mb-3 block w-full cursor-pointer overflow-hidden break-inside-avoid lg:mb-4"
          >
            <Image
              src={photo.src}
              alt="Trhni si smyčcem"
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="h-auto w-full object-cover grayscale-20 transition-all duration-500 hover:grayscale-0"
            />
          </button>
        ))}
      </div>

      {openPhoto &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/90 p-4 backdrop-blur-2xl print:hidden">
            <button
              className="group absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center border border-stone-100/40 transition-all hover:border-accent hover:bg-accent"
              onClick={close}
              aria-label="Zavřít"
            >
              <PiX className="h-6 w-6 text-white group-hover:text-black" />
            </button>

            <button
              className="absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center border border-stone-100/40 text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black lg:flex"
              onClick={showPrev}
              aria-label="Předchozí fotka"
            >
              <PiCaretLeft className="text-lg" />
            </button>
            <button
              className="absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center border border-stone-100/40 text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black lg:flex"
              onClick={showNext}
              aria-label="Další fotka"
            >
              <PiCaretRight className="text-lg" />
            </button>

            <div className="relative h-full max-h-[70vh] w-full max-w-5xl lg:max-h-[85vh]">
              <Image
                src={openPhoto.src}
                alt="Trhni si smyčcem"
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                className="flex h-10 w-10 cursor-pointer items-center justify-center border border-stone-100/40 text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black"
                onClick={showPrev}
                aria-label="Předchozí fotka"
              >
                <PiCaretLeft className="text-lg" />
              </button>
              <button
                className="flex h-10 w-10 cursor-pointer items-center justify-center border border-stone-100/40 text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black"
                onClick={showNext}
                aria-label="Další fotka"
              >
                <PiCaretRight className="text-lg" />
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
