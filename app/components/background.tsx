import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';

export default function Background() {
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
  return (
    <>
      <div
        className={classNames(
          'absolute inset-0 mix-blend-multiply -z-10',
          backgrounds[id % backgrounds.length].color
        )}
      />
      <Image
        src={'/images/' + id + '.jpeg'}
        alt="Trhni si smyčcem"
        fill
        className="-z-20 opacity-90 object-cover scale-125 grayscale contrast-125 brightness-110"
      />
    </>
  );
}
