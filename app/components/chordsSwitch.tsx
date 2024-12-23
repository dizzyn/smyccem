"use client";
import classNames from "classnames";
import { useState } from "react";
import { PiPianoKeysFill } from "react-icons/pi";

export function useChordSwitch() {
  const [chords, setChords] = useState<boolean>();

  return [
    ({ btnClassNames }: { btnClassNames?: string }) => (
      <button
        className={classNames(btnClassNames)}
        onClick={() => setChords(!chords)}
      >
        <PiPianoKeysFill />
        {chords ? "Akordy" : "Akordy"}
      </button>
    ),
    chords ? "showChords" : "",
  ];
}
