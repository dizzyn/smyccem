"use client";

import type { Concert } from "app/fetchConcerts";
import { parseDate } from "app/utils/date";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function ConcertsStrip({ concerts }: { concerts: Concert[] }) {
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
    <div className="flex p-4 lg:p-0 items-center z-10 gap-2 lg:pr-12 w-full justify-end lg:flex-row flex-col">
      <Link
        href="/koncerty"
        className={`text-xs text-white md:text-sm text-ellipsis whitespace-nowrap transition-all font-mono uppercase md:px-4 hover:underline decoration-dotted underline-offset-4 cursor-pointer duration-500  ${
          fade ? "opacity-100 " : "opacity-0"
        }`}
      >
        {parseDate(currentConcert.date)} - {currentConcert.venue}
      </Link>
    </div>
  );
}

export default ConcertsStrip;
