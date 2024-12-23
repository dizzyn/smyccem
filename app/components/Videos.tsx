"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperTypes } from "swiper/types";
import "swiper/css";
import { GrMoreVertical } from "react-icons/gr";
import { Link } from "next-view-transitions";
import { Metadata, Song } from "app/hudba/[slug]/page";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import classNames from "classnames";
import { generateThumbUrl } from "app/hudba/utils-cli";
import { GoVideo } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import { BsPlayBtnFill } from "react-icons/bs";
import VideoSwitch from "./videoSwitch";

const toLines = (songs: Song[], perLine: number) =>
  songs
    .filter((a) => a.metadata.youtube)
    .sort((a, b) => {
      if (a.metadata.title > b.metadata.title) {
        return 1;
      }
      return -1;
    })
    .reduce(
      (acc, song) =>
        acc[acc.length - 1].length < perLine
          ? acc.map((line, i) => (i == acc.length - 1 ? [...line, song] : line))
          : [...acc, [song]],
      [[]] as Song[][]
    );

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
  lines: Song[][];
  className: string;
  expanded: boolean;
}) => (
  <>
    {lines.map((line, i) => (
      <ul
        className={classNames(
          className,
          "overflow-hidden transition-all",
          i > 0 && !expanded ? "h-0" : ""
        )}
        key={line.map(({ slug }) => slug).join()}
      >
        {line.map((song) => (
          <Video key={song.slug} {...song} />
        ))}
      </ul>
    ))}
  </>
);

export default function Videos({ allSongs }: { allSongs: Song[] }) {
  const [expanded, setExpanded] = useState(false);

  const clsBtn =
    " text-lg sm:text-xl [&>svg]:text-2xl sm:[&>svg]:text-3xl text-white flex gap-1 items-center cursor-pointer whitespace-nowrap relative hover:top-[2px] transition-all ";

  return (
    <div className="pb-4">
      <Lines
        lines={toLines(allSongs, 3)}
        className="hidden md:block space-y-1 lg:space-y-2 columns-3"
        expanded={expanded}
      />
      <Lines
        lines={toLines(allSongs, 2)}
        className="md:hidden space-y-1 lg:space-y-2 columns-2"
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
