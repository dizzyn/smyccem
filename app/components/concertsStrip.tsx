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
    <Link
      href="#koncerty"
      className={`inline-block text-ellipsis whitespace-nowrap transition-opacity duration-500 hover:underline decoration-dotted underline-offset-4 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {parseDate(currentConcert.date)} - {currentConcert.venue}
    </Link>
  );
}

export default ConcertsStrip;
