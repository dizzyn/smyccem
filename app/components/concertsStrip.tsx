'use client';

import { parseDate } from 'app/utils/parseDate';
import concerts from '../koncerty/concerts.json';
import Link from 'next/link';
import React, { ReactNode, useEffect, useState } from 'react';
import { PiEnvelope, PiFacebookLogo, PiInstagramLogo } from 'react-icons/pi';

const SocialMediaLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="w-10 shrink-0 h-10 flex items-center justify-center hover:bg-white hover:text-black text-white transition-all"
    >
      {children}
    </Link>
  );
};

export default function ConcertsStrip() {
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
    <div className="flex p-4 lg:p-0 items-center gap-2 lg:pr-12 w-full justify-end lg:flex-row flex-col">
      <Link
        href="/koncerty"
        className={`text-xs text-white md:text-sm text-ellipsis whitespace-nowrap transition-all font-mono uppercase md:px-4 hover:underline decoration-dotted underline-offset-4 cursor-pointer duration-500  ${
          fade ? 'opacity-100 ' : 'opacity-0'
        }`}
      >
        {parseDate(currentConcert.date)} - {currentConcert.venue}
      </Link>
      <div className="flex gap-2">
        <SocialMediaLink href="https://www.instagram.com/smyccem/">
          <PiInstagramLogo className="w-7 h-7" />
        </SocialMediaLink>
        <SocialMediaLink href="https://m.facebook.com/smyccem">
          <PiFacebookLogo className="w-7 h-7" />
        </SocialMediaLink>
        <SocialMediaLink href="mailto:example@example.example">
          <PiEnvelope className="w-7 h-7" />
        </SocialMediaLink>
      </div>
    </div>
  );
}
