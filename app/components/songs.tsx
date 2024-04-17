import Link from "next/link";
import { getSongs } from "app/hudba/utils";

export function BlogPosts() {
  let allSongs = getSongs();

  return (
    <div>
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
            className="flex flex-col space-y-1 mb-4"
            href={`/hudba/${songs.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {/* {formatDate(songs.metadata.publishedAt, false)} */}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {songs.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
