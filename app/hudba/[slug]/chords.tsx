'use client';

import { ReactNode, useCallback, useEffect, useState } from 'react';

const lsKey = 'chords';

export default function ChordSwitch({ children }: { children: ReactNode }) {
  const [chords, setChords] = useState<boolean>();

  useEffect(() => {
    setChords(localStorage && localStorage.getItem(lsKey) == '1');
  }, []);

  const toggle = useCallback(() => {
    try {
      if (chords) localStorage.removeItem(lsKey);
      else localStorage.setItem(lsKey, '1');
      setChords(!chords);
    } catch (e) {}
  }, [chords]);

  return (
    <>
      {chords !== undefined && (
        <button
          className="absolute right-16 top-16 cursor-pointer text-white"
          onClick={toggle}
        >
          {chords ? 'Skrýt akordy' : 'Zobrazit akordy'}
        </button>
      )}
      <div className={chords ? 'showChords' : ''}>{children}</div>
    </>
  );
}
