import Link from "next/link";
import { getSongs } from "app/hudba/utils";
import VideosCarousel from "./videosCarousel";

export function Songs() {
  const allSongs = getSongs();
  const videos = allSongs.filter((a) => a.metadata?.youtube);

  return (
    <section className="py-2 px-6 space-y-8">
      <VideosCarousel data={videos} />
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
                className="text-white group block font-bold relative"
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
