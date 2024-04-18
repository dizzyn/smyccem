"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";

const lsKey = "chords";

export default function ChordSwitch({ children }: { children: ReactNode }) {
  const [chords, setChords] = useState<boolean>();

  useEffect(() => {
    setChords(localStorage && localStorage.getItem(lsKey) == "1");
  }, []);

  const toggle = useCallback(() => {
    try {
      if (chords) localStorage.removeItem(lsKey);
      else localStorage.setItem(lsKey, "1");
      setChords(!chords);
    } catch (e) {}
  }, [chords]);

  return (
    <>
      {chords !== undefined && (
        <div
          className="absolute right-10 top-10 cursor-pointer"
          onClick={toggle}
        >
          {chords ? "Skrýt akordy" : "Zobrazit akordy"}
        </div>
      )}
      <div className={chords ? "showChords" : ""}>{children}</div>
    </>
  );
}
