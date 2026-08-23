"use client";

import React, { useCallback, useSyncExternalStore } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import classNames from "classnames";
import { Song } from "app/hudba/[slug]/page";
import VideoSwitch from "./videoSwitch";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

export default function Videos({ songs }: { songs: Song[] }) {
  const items: Song[] = songs
    .filter((s) => s.metadata.youtube)
    .sort((a, b) => (a.metadata.title > b.metadata.title ? 1 : -1));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
    },
    [WheelGesturesPlugin()]
  );
  const subscribe = useCallback(
    (callback: () => void) => {
      if (!emblaApi) return () => {};
      emblaApi.on("select", callback);
      emblaApi.on("reInit", callback);
      return () => {
        emblaApi.off("select", callback);
        emblaApi.off("reInit", callback);
      };
    },
    [emblaApi]
  );
  const getSnapshot = useCallback(
    () => emblaApi?.selectedScrollSnap() ?? 0,
    [emblaApi]
  );
  const selectedIndex = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => 0
  );

  return (
    <div className="space-y-4">
      <div
        className="cursor-grab overflow-x-hidden overflow-y-visible py-10 active:cursor-grabbing lg:py-14"
        ref={emblaRef}
      >
        <div className="flex">
          {items.map((item, index) => {
            const active = index === selectedIndex;
            return (
              <div
                key={item.slug}
                className={classNames(
                  "relative min-w-0 shrink-0 grow-0 basis-2/3 px-2 sm:basis-1/2",
                  active ? "z-10" : "z-0"
                )}
              >
                <div
                  className={classNames(
                    "transition duration-300",
                    active
                      ? "scale-[1.3] opacity-100 shadow-[0_20px_60px_15px_rgba(0,0,0,0.8)]"
                      : "scale-[0.8] opacity-80"
                  )}
                >
                  <VideoSwitch song={item} style="thumb" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="flex h-10 w-10 cursor-pointer items-center justify-center border border-stone-100/40 text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black"
          aria-label="Předchozí video"
        >
          <PiCaretLeft className="text-lg" />
        </button>
        <button
          onClick={() => emblaApi?.scrollNext()}
          className="flex h-10 w-10 cursor-pointer items-center justify-center border border-stone-100/40 text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black"
          aria-label="Další video"
        >
          <PiCaretRight className="text-lg" />
        </button>
      </div>
    </div>
  );
}
