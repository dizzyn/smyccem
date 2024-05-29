"use client";
import { useState } from "react";
import { PiGuitar } from "react-icons/pi";

const lsKey = "chords";

export function useChordSwitch() {
  const [chords, setChords] = useState<boolean>();

  return [
    () => (
      <button
        className="flex gap-1 text-sm items-center cursor-pointer whitespace-nowrap text-black"
        onClick={() => setChords(!chords)}
      >
        <PiGuitar className="text-slate-500 w-7 h-7" />
        {chords ? "Skrýt akordy" : "Zobrazit akordy"}
      </button>
    ),
    chords ? "showChords" : "",
  ];
}
