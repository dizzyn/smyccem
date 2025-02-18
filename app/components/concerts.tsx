import fetchConcerts from "app/fetchConcerts";
import { getDate, getMonth, getMonthStr } from "app/utils/date";
import Link from "next/link";
import { use, Suspense } from "react";
import { PiArrowUpRightBold } from "react-icons/pi";

// Data jsou zde:
// – https://docs.google.com/spreadsheets/d/1nB21GAF1Yknomu2jN7xqXg1_gBCrWalkqygytQyUP0E/edit#gid=1460709352

function List() {
  const concerts = use(fetchConcerts());

  return (
    <ul className="text-xl lg:text-2xl font-medium text-white space-y-8 lg:space-y-10 leading-9">
      {concerts.map((concert) => (
        <li
          key={concert.date}
          className="mb-4 flex items-center justify-between gap-4"
        >
          <div className="flex items-center lg:gap-6 gap-2 sm:gap-4 text-lg sm:text-3xl transition-all">
            <div className="lg:divide-y-2 divide-y-2 text-center inline-flex gap-1 flex-col font-bold border-r-2 lg:border-r-4 w-14 lg:w-20 ">
              <span>{getDate(concert.date)}</span>
              <span className="uppercase text-sm sm:text-2xl">
                {getMonthStr(concert.date)}
              </span>
            </div>
            <div className="inline-flex flex-col">
              <div className="font-bold ">{concert.venue}</div>
              <div className="text-sm sm:text-2xl">
                {[concert.city, concert.time, concert.comment]
                  .filter((a) => !!a)
                  .join(", ")}
              </div>
            </div>
          </div>
          {concert.url && (
            <Link
              href={concert.url}
              className="bg-white shrink-0 hover:bg-black group transition-all w-12 h-12 md:w-20 md:h-20 flex items-center justify-center"
            >
              <PiArrowUpRightBold className="w-8 h-8 md:w-12 md:h-12 text-black group-hover:text-white transition-all" />
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
