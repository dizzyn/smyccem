"use client";
import { PiArrowLeftBold } from "react-icons/pi";
import VideoSwitch from "./videoSwitch";
import { useChordSwitch } from "./chordsSwitch";
import classNames from "classnames";
import { ReactNode } from "react";
import { Link } from "next-view-transitions";
import { Song as SongType } from "app/hudba/[slug]/page";
import { useParams, useRouter, useSearchParams } from "next/navigation";

function Song({ children, song }: { song: SongType; children: ReactNode }) {
  const [ChordsSwitch, chordsCls] = useChordSwitch();
  const clsBtn =
    " text-lg sm:text-xl [&>svg]:text-2xl sm:[&>svg]:text-3xl text-white flex gap-1 items-center cursor-pointer whitespace-nowrap relative hover:top-[2px] transition-all ";

  const params = useSearchParams();

  return (
    <div className="space-y-2 lg:ml-2">
      <div className="flex flex-col lg:flex-row pl-3 uppercase bg-white items-center">
        <h1 className="text-3xl text-black">{song.metadata.title}</h1>
      </div>
      <div className="flex flex-row px-3 lg:pl-0 gap-5 print:hidden">
        <Link
          href="/hudba"
          className={classNames(
            clsBtn,
            "left-0 hover:-left-[4px] hover:!top-0"
          )}
        >
          <PiArrowLeftBold />
        </Link>

        <ChordsSwitch btnClassNames={clsBtn + " ml-auto"} />
        {song.metadata.youtube && (
          <VideoSwitch
            song={song}
            btnClassNames={clsBtn}
            style="button"
            autoplay={params.has("play")}
          />
        )}
      </div>
      {song.metadata.info && (
        <div className="py-3 px-3 lg:pl-0 ">
          <p className="text-white font-medium uppercase">
            {song.metadata.info}
          </p>
        </div>
      )}

      <article className={classNames("songLyrics px-6 lg:pl-0", chordsCls)}>
        {children}
      </article>
    </div>
  );
}

export default Song;
