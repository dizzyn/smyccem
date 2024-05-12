import Link from "next/link";
import { getSongs } from "app/hudba/utils";

export function Songs() {
  const allSongs = getSongs();

  return (
    <>
      <div className="text-white">[Několik lepších videí]</div>
      <div className="flex flex-col">
        {allSongs
          .sort((a, b) => {
            if (new Date(a.metadata.title) > new Date(b.metadata.title)) {
              return -1;
            }
            return 1;
          })
          .map((songs) => (
            <Link
              key={songs.slug}
              className="text-white group font-bold relative py-2 px-3 text-2xl"
              href={`/hudba/${songs.slug}`}
            >
              <span className="absolute top-0 bottom-0 right-0 z-0 bg-white group-hover:left-0 duration-300 transition-all left-full" />
              <span className="z-10 isolate transition-all duration-500 group-hover:text-black delay-150">
                {songs.metadata.title}
              </span>
            </Link>
          ))}
      </div>
    </>
  );
}
