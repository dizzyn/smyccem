import { getSongs } from "app/hudba/utils";
import { CustomMDX } from "app/components/mdx";
import SongsList from "app/components/songsList";

export default function Music() {
  const songs = getSongs().sort((a, b) =>
    a.metadata.title > b.metadata.title ? 1 : -1
  );

  const songItems = songs.map((song) => ({
    slug: song.slug,
    metadata: song.metadata,
    lyrics: <CustomMDX source={song.content} />,
  }));

  return (
    <section
      id="hudba"
      className="scroll-mt-8 px-6 py-16 lg:scroll-mt-4 lg:px-24 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl leading-[0.95] text-stone-50 lg:text-6xl">
          Hudba <span className="text-accent-soft">&amp; Texty</span>
        </h2>

        <div className="mt-12 columns-1 sm:columns-2 md:columns-3">
          <SongsList songs={songItems} />
        </div>
      </div>
    </section>
  );
}
