import Link from "next/link";
import { getSongs } from "app/hudba/utils";
import Videos from "./Videos";
import { PiYoutubeLogo } from "react-icons/pi";

export function Songs() {
  const allSongs = getSongs();
  const titleCls = "font-bold text-3xl uppercase my-4";

  return (
    <section className="py-2 px-6">
      <div className="flex">
        <h2 className={titleCls}>Nahrávky</h2>
        <a
          href="https://www.youtube.com/@smyccem"
          target="_blank"
          className="hidden sm:flex flex-row items-center ml-auto hover:translate-x-1 transition-all"
        >
          <span>Náš Youtube kanál</span>
          <PiYoutubeLogo className="w-8 h-8 md:w-10 md:h-10 ml-1" />
        </a>
      </div>
      <Videos allSongs={allSongs} />
      <h2 className={titleCls}>Texty s akordy</h2>
      <ul className="space-y-1 lg:space-y-2">
        {allSongs
          .sort((a, b) => {
            if (a.metadata.title > b.metadata.title) {
              return 1;
            }
            return -1;
          })
          .map((song) => (
            <li key={song.slug}>
              <Link
                href={`/hudba/${song.slug}`}
                className="text-white group block relative"
              >
                <span className="absolute top-0 bottom-0 right-0 z-0 bg-white group-hover:left-0 duration-300 transition-all left-full" />
                <span className="z-10 isolate text-2xl lg:text-3xl transition-all duration-500 group-hover:text-black">
                  {song.metadata.title}
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
