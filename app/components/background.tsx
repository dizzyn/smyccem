"use client";

import React, { useEffect, useState } from "react";
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

  const [id, setId] = useState<number>();

  useEffect(() => {
    // Rehydration
    if (id == undefined) {
      setId(SSRrandomBgId);
    } else {
      // Client side rendering
      const arr = backgrounds
        .map((color, id) => ({ color, id }))
        .filter((a) => a.id !== id);

      setId(arr[Math.floor(Math.random() * arr.length) || 0].id);
    }
  }, [path]);

  // Server side rendering
  const bgId = id || SSRrandomBgId;

  return path == "/" ? (
    <video
      autoPlay
      muted
      loop
      id="myVideo"
      poster="/videos/bg02.png"
      className="bg-video"
      controlsList="nodownload"
    >
      <source src="/videos/bg02.mp4" type="video/mp4" />
    </video>
  ) : (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={classNames(
          "absolute inset-0 overflow-hidden mix-blend-multiply -z-10 transition-colors duration-[2000ms] print:hidden",
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
