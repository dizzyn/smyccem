"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { backgrounds } from "backgrounds";

export default function Background({
  SSRrandomBgId,
}: {
  SSRrandomBgId: number;
}) {
  const path = usePathname();

  const [id, setId] = useState<number>(SSRrandomBgId);
  const [videoOpacity, setVideoOpacity] = useState(0.5);
  const isFirstPath = useRef(true);

  useEffect(() => {
    // Rehydration: skip re-randomizing on the initial mount
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }

    // Client side rendering: pick a new random background on path change
    setId((currentId) => {
      const arr = backgrounds
        .map((color, id) => ({ color, id }))
        .filter((a) => a.id !== currentId);

      return arr[Math.floor(Math.random() * arr.length) || 0].id;
    });
  }, [path]);

  useEffect(() => {
    if (path !== "/") return;

    const wrapper = document.getElementById("wrapper");
    if (!wrapper) return;

    const handleScroll = () => {
      const progress = Math.min(
        Math.max(wrapper.scrollTop / window.innerHeight, 0),
        1
      );
      setVideoOpacity(0.1 + 0.4 * (1 - progress));
    };

    handleScroll();
    wrapper.addEventListener("scroll", handleScroll, { passive: true });
    return () => wrapper.removeEventListener("scroll", handleScroll);
  }, [path]);

  const bgId = id;

  return path == "/" ? (
    <video
      autoPlay
      muted
      loop
      id="myVideo"
      poster="/videos/bg02.png"
      className="bg-video transition-opacity duration-100"
      controlsList="nodownload"
      playsInline
      style={{ userSelect: "none", opacity: videoOpacity }}
    >
      <source src="/videos/bg02.mp4" type="video/mp4" />
    </video>
  ) : (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={classNames(
          "absolute inset-0 overflow-hidden mix-blend-multiply -z-10 transition-colors duration-2000 print:hidden",
          backgrounds[bgId % backgrounds.length]
        )}
      />
      <Image
        src={"/images/" + bgId + ".jpeg"}
        alt="Trhni si smyčcem"
        fill
        className="-z-20 print:hidden opacity-90 object-cover scale-125 grayscale contrast-125 brightness-110"
      />
    </div>
  );
}
