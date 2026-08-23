"use client";

import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { PiPianoKeysFill, PiX } from "react-icons/pi";
import VideoSwitch from "./videoSwitch";
import type { Metadata } from "app/hudba/[slug]/page";

interface SongItem {
  slug: string;
  metadata: Metadata;
  lyrics: ReactNode;
}

export default function SongsList({ songs }: { songs: SongItem[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [chords, setChords] = useState(false);

  const openSong = songs.find((s) => s.slug === openSlug) ?? null;

  const close = () => {
    setOpenSlug(null);
    setChords(false);
  };

  useEffect(() => {
    if (!openSlug) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openSlug]);

  return (
    <>
      <ul className="space-y-1 lg:space-y-4">
        {songs.map((song) => (
          <li key={song.slug}>
            <button
              onClick={() => setOpenSlug(song.slug)}
              className="group block cursor-pointer text-left"
            >
              <span className="font-display text-2xl text-stone-100 transition-colors group-hover:text-accent lg:text-3xl">
                {song.metadata.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openSong &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black print:hidden">
            <button
              className="group fixed right-4 top-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center border border-stone-100/40 transition-all hover:border-accent hover:bg-accent"
              onClick={close}
              aria-label="Zavřít"
            >
              <PiX className="h-6 w-6 text-white group-hover:text-black" />
            </button>

            <div className="mx-auto max-w-5xl p-6 lg:p-12">
              <h3 className="font-display pr-16 text-3xl text-stone-50 lg:text-4xl">
                {openSong.metadata.title}
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setChords((c) => !c)}
                  className={classNames(
                    "flex h-10 cursor-pointer items-center gap-2 border px-4 text-[11px] uppercase tracking-[0.25em] transition-all",
                    chords
                      ? "border-accent bg-accent text-black"
                      : "border-stone-100/40 text-stone-100 hover:border-accent hover:bg-accent hover:text-black"
                  )}
                >
                  <PiPianoKeysFill />
                  Akordy
                </button>
                {openSong.metadata.youtube && (
                  <VideoSwitch
                    song={{
                      slug: openSong.slug,
                      metadata: openSong.metadata,
                      content: "",
                    }}
                    style="button"
                    btnClassNames="flex h-10 cursor-pointer items-center gap-2 border border-stone-100/40 px-4 text-[11px] uppercase tracking-[0.25em] text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black"
                  />
                )}
              </div>

              {openSong.metadata.info && (
                <p className="mt-4 text-stone-300/80">
                  {openSong.metadata.info}
                </p>
              )}

              <article
                className={classNames(
                  "songLyrics mt-6",
                  chords ? "showChords" : ""
                )}
              >
                {openSong.lyrics}
              </article>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
