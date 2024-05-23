import Link from "next/link";
import { getSongs } from "app/hudba/utils";

export function Songs() {
  const allSongs = getSongs();

  return (
    <>
      <ul className="space-y-1 lg:space-y-2">
        {allSongs
          .filter((a) => a.metadata?.youtube)
          .map((song) => (
            <li key={song.slug}>
              <Link
                href={`/hudba/${song.slug}`}
                className="text-white group block font-bold relative py-2 px-6 "
              >
                <span className="absolute top-0 bottom-0 right-0 z-0 bg-white group-hover:left-0 duration-300 transition-all left-full" />
                <span className="z-10 isolate text-2xl lg:text-3xl transition-all duration-500 group-hover:text-black">
                  {song.metadata.youtube}
                </span>
              </Link>
            </li>
          ))}
      </ul>
      <ul className="space-y-1 lg:space-y-2">
        {allSongs
          .sort((a, b) => {
            // if (a.metadata.youtube) {
            //   return -1;
            // }
            // if (b.metadata.youtube) {
            //   return 1;
            // }
            if (a.metadata.title > b.metadata.title) {
              return 1;
            }
            return -1;
          })
          .map((song) => (
            <li key={song.slug}>
              <Link
                href={`/hudba/${song.slug}`}
                className="text-white group block font-bold relative py-2 px-6 "
              >
                <span className="absolute top-0 bottom-0 right-0 z-0 bg-white group-hover:left-0 duration-300 transition-all left-full" />
                <span className="z-10 isolate text-2xl lg:text-3xl transition-all duration-500 group-hover:text-black">
                  {song.metadata.title}
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
