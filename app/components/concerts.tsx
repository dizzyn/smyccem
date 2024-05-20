'use client';
import concerts from '../koncerty/concerts.json';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { PiEnvelope, PiFacebookLogo, PiInstagramLogo } from 'react-icons/pi';

export default function Concerts() {
  const [currentConcert, setCurrentConcert] = useState(concerts[0]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex: number) => {
          const newIndex = (prevIndex + 1) % concerts.length;
          setCurrentConcert(concerts[newIndex]);
          return newIndex;
        });
        setFade(true);
      }, 500);
    }, 3500);

    return () => clearInterval(timer);
  }, [concerts]);

  return (
    <div className="flex flex-col lg:flex-row bg-black md:bg-transparent items-center md:gap-2 text-white md:items-end md:justify-center px-8 py-2 md:pr-16 fixed bottom-0 left-0 right-0 md:relative">
      <Link
        href="/koncerty"
        className={`text-xs md:text-sm py-4 text-ellipsis whitespace-nowrap transition-all font-mono uppercase md:px-4 hover:underline decoration-dotted underline-offset-4 cursor-pointer duration-500  ${
          fade ? 'opacity-100 ' : 'opacity-0'
        }`}
      >
        {currentConcert.date} - {currentConcert.venue}
      </Link>
      <div className="flex">
        <Link
          href="https://www.instagram.com/smyccem/"
          className="w-10 shrink-0h-10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-lg"
        >
          <PiInstagramLogo className="w-7 h-7" />
        </Link>
        <Link
          href="https://m.facebook.com/smyccem"
          className="w-10 shrink-0 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-lg"
        >
          <PiFacebookLogo className="w-7 h-7" />
        </Link>
        <Link
          href="mailto:example@example.example"
          className="w-10 shrink-0 h-10 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-lg"
        >
          <PiEnvelope className="w-7 h-7" />
        </Link>
      </div>
    </div>
  );
}
