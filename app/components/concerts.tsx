import fetchConcerts from "app/fetchConcerts";
import { getDate, getMonth } from "app/utils/date";
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
          <div className="flex items-center lg:gap-6 gap-4 ">
            <div className="lg:divide-y-4 divide-y-2 text-center inline-flex gap-1 flex-col text-3xl lg:text-5xl font-bold border-r-2 lg:border-r-4">
              <span className="pr-2 pb-1">{getDate(concert.date)}</span>
              <span className="pr-2 pt-1">{getMonth(concert.date)}</span>
            </div>
            <div className="flex flex-col lg:gap-2">
              <div className="text-xl lg:text-3xl font-bold">
                {concert.venue}
              </div>
              <div>
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
