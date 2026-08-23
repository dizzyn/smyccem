import { ReactNode } from "react";

export default function Hero({ concertSlot }: { concertSlot: ReactNode }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-6 pb-8 pt-2 text-center lg:px-16 lg:pb-14 lg:pt-4">
      <div
        className="pointer-events-none absolute inset-0 -z-5 bg-linear-to-t from-black/85 via-black/25 to-black/50"
        aria-hidden
      />

      <div className="flex flex-col items-center">
        <h1 className="inline-flex flex-col items-center text-center font-display italic leading-[0.85] text-stone-50 [text-shadow:0_4px_40px_rgba(0,0,0,0.65)] lg:items-start lg:text-left">
          <span className="relative -translate-y-2 text-[clamp(1.75rem,3.5vw,3.25rem)] font-medium text-accent-soft lg:ml-[calc(clamp(3rem,9vw,6rem))] 2xl:ml-24 lg:translate-y-[clamp(0.5rem,2.5vw,1.5rem)]">
            Trhni si
          </span>
          <span className="text-[clamp(3.25rem,11vw,8.5rem)] font-medium">
            Smyčcem
          </span>
        </h1>
        <p className="mt-6 text-[11px] uppercase tracking-[0.35em] text-stone-300/80 lg:mt-3 lg:pl-52 lg:text-xs">
          Mezi punkem a filharmonií
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:bottom-14">
        <p className="text-[10px] uppercase tracking-[0.3em] text-stone-300/70">
          Nejbližší koncerty
        </p>
        <div className="font-display text-sm text-stone-50 lg:text-base">
          {concertSlot}
        </div>
      </div>
    </div>
  );
}
