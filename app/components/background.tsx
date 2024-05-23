"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const backgrounds = [
  "bg-slate-500",
  "bg-rose-500",
  "bg-red-700",
  "bg-amber-700",
  "bg-violet-700",
  "bg-slate-600",
  "bg-green-700",
  "bg-indigo-700",
];

export default function Background() {
  const path = usePathname();

  const [id, setId] = useState(0);

  useEffect(() => {
    const arr = backgrounds
      .map((color, id) => ({ color, id }))
      .filter((a) => a.id !== id);

    setId(arr[Math.floor(Math.random() * arr.length) || 0].id);
  }, [path]);

  return path == "/" ? (
    <div
      className={classNames(
        "absolute inset-0 flex items-center justify-center mix-blend-multiply -z-10 print:hidden bg-black"
      )}
    >
      <div className="text-white/20">
        https://youtu.be/NJj8siEYoYE?si=igQmLyhHtTSX-7rz&t=70
      </div>
    </div>
  ) : (
    <>
      <div
        className={classNames(
          "absolute inset-0 mix-blend-multiply -z-10 transition-colors duration-[2000ms] print:hidden",
          backgrounds[id % backgrounds.length]
        )}
      />
      <Image
        src={"/images/" + id + ".jpeg"}
        alt="Trhni si smyčcem"
        fill
        className="-z-20 print:hidden opacity-90 object-cover scale-125 grayscale contrast-125 brightness-110"
      />
    </>
  );
}
