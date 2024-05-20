import concerts from './concerts.json';

export const metadata = {
  title: 'Koncerty',
  description: 'Naše koncerty',
};

export default function Page() {
  return (
    <section className="px-6 py-8 lg:py-4">
      <ul className="text-xl lg:text-2xl font-medium text-white space-y-8 leading-9">
        {concerts.map((concert) => (
          <li key={concert.date} className="mb-4">
            <h2 className="text-2xl font-bold">
              {concert.date} {concert.time}
            </h2>
            <p className="text-lg">
              {concert.type} @ {concert.venue}
            </p>
            <p className="text-lg">{concert.city}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
