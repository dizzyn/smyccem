'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';
import { PiGuitar } from 'react-icons/pi';

const lsKey = 'chords';

export default function ChordsSwitch() {
  const [chords, setChords] = useState<boolean>();

  useEffect(() => {
    setChords(localStorage && localStorage.getItem(lsKey) == '1');
  }, []);

  const toggleChords = useCallback(() => {
    try {
      if (chords) localStorage.removeItem(lsKey);
      else localStorage.setItem(lsKey, '1');
      setChords(!chords);
    } catch (e) {}
  }, [chords]);

  return (
    chords !== undefined && (
      <button
        className="flex gap-1 text-sm items-center cursor-pointer whitespace-nowrap"
        onClick={toggleChords}
      >
        <PiGuitar className="text-slate-500 w-7 h-7" />
        {chords ? 'Skrýt akordy' : 'Zobrazit akordy'}
      </button>
    )
  );
}
