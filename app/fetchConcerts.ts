import concerts from './data/concerts.json';

export interface Concert {
  date: string;
  time?: string;
  venue: string;
  city: string;
  url?: string;
  comment?: string;
}

function fetchConcerts() {
  return Promise.resolve(concerts as Concert[]);
}

export default fetchConcerts;
