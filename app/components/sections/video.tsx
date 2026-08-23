import { getSongs } from "app/hudba/utils";
import Videos from "app/components/Videos";

export default function VideoSection() {
  const songs = getSongs();

  return (
    <section
      id="video"
      className="scroll-mt-8 py-16 lg:scroll-mt-4 lg:py-24"
    >
      <div className="px-6 lg:px-24">
        <h2 className="mx-auto max-w-6xl font-display text-4xl leading-[0.95] text-stone-50 lg:text-6xl">
          Video
        </h2>
      </div>

      <div className="mt-12">
        <Videos songs={songs} />
      </div>
    </section>
  );
}
