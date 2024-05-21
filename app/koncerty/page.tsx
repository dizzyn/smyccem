import { getDate, getMonth } from 'app/utils/date';
import concerts from './concerts.json';

export const metadata = {
  title: 'Koncerty',
  description: 'Naše koncerty',
};

export default function Page() {
  return (
    <section className="px-6 py-8 lg:py-4">
      <ul className="text-xl lg:text-2xl font-medium text-white space-y-8 lg:space-y-10 leading-9">
        {concerts.map((concert) => (
          <li
            key={concert.date}
            className="mb-4 flex items-center lg:gap-6 gap-4"
          >
            <div className="lg:divide-y-4 divide-y-2 text-center inline-flex gap-1 flex-col text-3xl lg:text-5xl font-bold border-r-2 lg:border-r-4">
              <span className="pr-2 pb-1">{getDate(concert.date)}</span>
              <span className="pr-2 pt-1">{getMonth(concert.date)}</span>
            </div>
            <div className="flex flex-col lg:gap-2">
              <div className="text-xl lg:text-3xl font-bold">
                {concert.type} @ {concert.venue}
              </div>
              <div>
                {concert.city}, {concert.time}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
