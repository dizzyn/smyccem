'use client';

import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

export default function Background({ isVideo }: { isVideo?: boolean }) {
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const id = randomIntFromInterval(0, 6);

  const backgrounds = [
    {
      color: 'bg-slate-500',
    },
    {
      color: 'bg-rose-500',
    },
    {
      color: 'bg-red-700',
    },
    {
      color: 'bg-amber-700',
    },
    {
      color: 'bg-violet-700',
    },
    {
      color: 'bg-slate-600',
    },
    {
      color: 'bg-green-700',
    },
    {
      color: 'bg-indigo-700',
    },
  ];
  return isVideo ? (
    <div
      className={classNames(
        'absolute inset-0 flex items-center justify-center mix-blend-multiply -z-10 print:hidden bg-black'
      )}
    >
      <div className="text-white/20">VIDEO DIV</div>
    </div>
  ) : (
    <>
      <div
        className={classNames(
          'absolute inset-0 mix-blend-multiply -z-10 print:hidden',
          backgrounds[id % backgrounds.length].color
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
