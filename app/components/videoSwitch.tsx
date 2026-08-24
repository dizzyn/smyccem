"use client";

import { Song } from "app/hudba/[slug]/page";
import { generateThumbUrl } from "app/hudba/utils-cli";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { BsPlayBtnFill } from "react-icons/bs";
import { PiX, PiYoutubeLogo } from "react-icons/pi";
import Image from "next/image";

export default function VideoSwitch({
  song,
  btnClassNames,
  style,
  autoplay,
}: {
  autoplay?: boolean;
  song: Song;
  btnClassNames?: string;
  style: "button" | "thumb";
}) {
  const [showVideo, setShowVideo] = useState(autoplay);

  useEffect(() => {
    if (!showVideo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowVideo(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showVideo]);

  return (
    <>
      {style == "button" ? (
        <a className={btnClassNames} onClick={() => setShowVideo(!showVideo)}>
          <PiYoutubeLogo />
          Video
        </a>
      ) : (
        <div
          onClick={() => setShowVideo(!showVideo)}
          className="group relative aspect-video cursor-pointer overflow-hidden bg-black"
        >
          <Image
            src={generateThumbUrl(song)}
            alt="Cover Image"
            width={1280}
            height={720}
            className="h-full w-full object-contain"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
          <BsPlayBtnFill className="absolute left-3 top-3 text-3xl text-stone-50 drop-shadow-lg transition-transform group-hover:scale-110 lg:text-4xl" />
          <div className="absolute inset-x-0 bottom-0 p-3 text-right font-display text-stone-50">
            {song.metadata.title}
          </div>
        </div>
      )}

      {showVideo &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-2xl z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideo(false)}
          >
            <button
              className="group absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center border border-stone-100/40 transition-all hover:border-accent hover:bg-accent"
              onClick={() => setShowVideo(false)}
              aria-label="Zavřít video"
            >
              <PiX className="h-6 w-6 text-white group-hover:text-black" />
            </button>
            <div
              className="max-w-5xl w-full rounded-lg relative aspect-video overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={
                  "https://www.youtube.com/embed/" +
                  song.metadata.youtube +
                  "?autoplay=1"
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full shadow-2xl"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
