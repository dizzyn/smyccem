'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const backgrounds = [
  'bg-slate-500',
  'bg-rose-500',
  'bg-red-700',
  'bg-amber-700',
  'bg-violet-700',
  'bg-slate-600',
  'bg-green-700',
  'bg-indigo-700',
];

export default function Background() {
  const path = usePathname();

  let id: number;

  id = useMemo(() => {
    const arr = backgrounds
      .map((color, id) => ({ color, id }))
      .filter((a) => a.id !== id);

    return arr[Math.floor(Math.random() * arr.length) || 0].id;
  }, [path]);

  const videoStart = 70;

  return path == '/' ? (
    <video
      autoPlay
      muted
      loop
      id="myVideo"
      className="absolute min-w-full min-h-full opacity-50"
    >
      <source src="/videos/bg01.mp4" type="video/mp4" />
    </video>
  ) : (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={classNames(
          'absolute inset-0 overflow-hidden mix-blend-multiply -z-10 transition-colors duration-[2000ms] print:hidden',
          backgrounds[id % backgrounds.length]
        )}
      />
      <Image
        src={'/images/' + id + '.jpeg'}
        alt="Trhni si smyčcem"
        fill
        className="-z-20 print:hidden opacity-90 object-cover scale-125 grayscale contrast-125 brightness-110"
      />
    </div>
  );
}
