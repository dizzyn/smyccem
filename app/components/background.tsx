'use client';

import React, { useEffect, useMemo, useState } from 'react';
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
    <div
      className={classNames(
        'absolute inset-0 flex items-center justify-center -z-10 print:hidden bg-black opacity-60'
      )}
    >
      <div>
        <iframe
          src={`https://www.youtube.com/embed/NJj8siEYoYE?si=plShCFYB2r81LBzc?vq=hd1080&modestbranding=1&rel=0&fs=0&controls=0&disablekb=1&mute=1&autoplay=1&playsinline=1&start=${videoStart}`}
          title="Trhni si smyčcem"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full absolute h-full inset-0 scale-125"
        />
      </div>
    </div>
  ) : (
    <>
      <div
        className={classNames(
          'absolute inset-0 mix-blend-multiply -z-10 transition-colors duration-[2000ms] print:hidden',
          backgrounds[id % backgrounds.length]
        )}
      />
      <Image
        src={'/images/' + id + '.jpeg'}
        alt="Trhni si smyčcem"
        fill
        className="-z-20 print:hidden opacity-90 object-cover scale-125 grayscale contrast-125 brightness-110"
      />
    </>
  );
}
