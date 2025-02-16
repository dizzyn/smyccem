"use client";

import React, { useState } from "react";
import { Song } from "app/hudba/[slug]/page";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import classNames from "classnames";
import VideoSwitch from "./videoSwitch";
import { PiYoutubeLogo } from "react-icons/pi";
import { BsPlayBtnFill } from "react-icons/bs";

interface Advert {
  slug: "advert";
}

const toLines = (songs: Song[], perLine: number) => {
  const _s = songs
    .filter((a) => a.metadata.youtube)
    .sort((a, b) => {
      if (a.metadata.title > b.metadata.title) {
        return 1;
      }
      return -1;
    });

  // null is for an advertisement on the end
  return [..._s, { slug: "advert" } satisfies Advert].reduce(
    (acc, song) =>
      acc[acc.length - 1].length < perLine
        ? acc.map((line, i) => (i == acc.length - 1 ? [...line, song] : line))
        : [...acc, [song]],
    [[]] as (Song | Advert)[][]
  );
};

const Video = (song: Song) => (
  <li className="block">
    <VideoSwitch song={song} style="thumb" />
  </li>
);

const Lines = ({
  lines,
  className,
  expanded,
}: {
  lines: (Song | Advert)[][];
  className: string;
  expanded: boolean;
}) => (
  <>
    {lines.map((line, i) => {
      if (i > 0 && !expanded) return null;
      return (
        <ul
          className={classNames(className, "overflow-hidden transition-all")}
          key={line.map(({ slug }) => slug).join()}
        >
          {line.map((song) =>
            "metadata" in song ? (
              <Video key={song.slug} {...song} />
            ) : (
              <a
                key={song.slug}
                href="https://www.youtube.com/@smyccem"
                target="_blank"
                className="group relative border-white border-3 cursor-pointer aspect-video animation-magic-backdrop grid grid-rows-3 place-items-center"
              >
                <div className="justify-center">Náš Youtube kanál</div>
                <PiYoutubeLogo className=" text-4xl lg:text-5xl group-hover:text-5xl group-hover:lg:text-6xl transition-all" />
              </a>
            )
          )}
        </ul>
      );
    })}
  </>
);

export default function Videos({ songs }: { songs: Song[] }) {
  const [expanded, setExpanded] = useState(false);

  const clsBtn =
    "text-lg sm:text-xl [&>svg]:text-2xl sm:[&>svg]:text-3xl text-white flex gap-1 items-center cursor-pointer whitespace-nowrap relative hover:top-[2px] transition-all ";

  return (
    <div className="pb-4 space-y-1 md:space-y-2">
      <Lines
        lines={toLines(songs, 3)}
        className="hidden sm:block columns-3"
        expanded={expanded}
      />
      <Lines
        lines={toLines(songs, 2)}
        className="hidden xs:max-sm:block sm:hidden columns-2"
        expanded={expanded}
      />
      <Lines
        lines={toLines(songs, 1)}
        className="xs:hidden"
        expanded={expanded}
      />
      <div className="flex justify-center">
        {expanded || (
          <button onClick={() => setExpanded((e) => !e)} className={clsBtn}>
            <MdKeyboardArrowDown />
            Zobrazit více
            <MdKeyboardArrowDown />
          </button>
        )}
        {expanded && (
          <button onClick={() => setExpanded((e) => !e)} className={clsBtn}>
            <MdKeyboardArrowUp />
            Zobrazit méně
            <MdKeyboardArrowUp />
          </button>
        )}
      </div>
    </div>
  );
}
