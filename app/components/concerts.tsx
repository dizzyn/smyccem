import fetchConcerts from "app/fetchConcerts";
import { getDate, getMonth, getMonthStr } from "app/utils/date";
import Link from "next/link";
import { use, Suspense } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";

// Data jsou zde:
// – https://docs.google.com/spreadsheets/d/1nB21GAF1Yknomu2jN7xqXg1_gBCrWalkqygytQyUP0E/edit?gid=445078617

function List() {
  const concerts = use(fetchConcerts());

  return (
    <ul className="divide-y divide-stone-100/15 border-t border-stone-100/15">
      {concerts.map((concert) => (
        <li
          key={concert.date}
          className="flex items-center justify-between gap-4 py-6"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="inline-flex w-14 shrink-0 flex-col items-center gap-1 border-r border-stone-100/20 pr-4 text-center font-display sm:w-20">
              <span className="text-2xl text-stone-50 sm:text-3xl">
                {getDate(concert.date)}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-accent-soft sm:text-sm">
                {getMonthStr(concert.date)}
              </span>
            </div>
            <div className="inline-flex flex-col">
              <div className="font-display text-xl text-stone-50 sm:text-2xl">
                {concert.venue}
              </div>
              <div className="text-sm text-stone-300/80 sm:text-base">
                {[concert.city, concert.time, concert.comment]
                  .filter((a) => !!a)
                  .join(", ")}
              </div>
            </div>
          </div>
          {concert.url && (
            <Link
              href={concert.url}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-stone-100/40 text-stone-100 transition-all hover:border-accent hover:bg-accent hover:text-black"
            >
              <PiArrowUpRightBold className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Concerts() {
  return (
    <Suspense fallback="...">
      <List />
    </Suspense>
  );
}
