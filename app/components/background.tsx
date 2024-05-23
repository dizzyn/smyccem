"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const backgrounds = [
  {
    id: 0,
    color: "bg-slate-500",
  },
  {
    id: 1,
    color: "bg-rose-500",
  },
  {
    id: 2,
    color: "bg-red-700",
  },
  {
    id: 3,
    color: "bg-amber-700",
  },
  {
    id: 4,
    color: "bg-violet-700",
  },
  {
    id: 5,
    color: "bg-slate-600",
  },
  {
    id: 6,
    color: "bg-green-700",
  },
  {
    id: 7,
    color: "bg-indigo-700",
  },
];

export default function Background() {
  const path = usePathname();

  const [id, setId] = useState(0);

  useEffect(() => {
    const arr = backgrounds.filter((a) => a.id !== id);
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
          backgrounds[id % backgrounds.length].color
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
