"use client";
import { PiArrowLeftBold } from "react-icons/pi";
import VideoSwitch from "./videoSwitch";
import { useChordSwitch } from "./chordsSwitch";
import classNames from "classnames";
import { ReactNode } from "react";
import { Link } from "next-view-transitions";

function Song({
  children,
  youtube,
  title,
  info,
}: {
  children: ReactNode;
  title: string;
  info?: string;
  youtube?: string;
  thumbnail?: string;
}) {
  const [ChordsSwitch, chordsCls] = useChordSwitch();
  return (
    <div className="space-y-8">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-y-1 px-6 py-3 uppercase bg-white">
        <h1 className="font-bold text-xl lg:text-3xl text-black flex items-center justify-center lg:justify-start w-full text-center gap-1.5 lg:gap-2 relative">
          <Link
            href="/hudba"
            className="absolute left-0 top-1/2 lg:relative hover:-left-2 transition-all"
          >
            <PiArrowLeftBold className="w-8 h-8 lg:w-10 lg:h-10 text-black" />
          </Link>
          {title}
        </h1>
        <div className="flex items-center gap-4">
          <ChordsSwitch />
          <VideoSwitch videoID={youtube} />
        </div>
      </div>

      {info && (
        <div className="px-6">
          <p className="text-white font-medium uppercase">{info}</p>
        </div>
      )}

      <article className={classNames("songLyrics px-6", chordsCls)}>
        {children}
      </article>
    </div>
  );
}

export default Song;
