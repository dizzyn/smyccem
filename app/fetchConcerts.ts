export interface Concert {
  date: string;
  time?: string;
  venue: string;
  city: string;
  url?: string;
  comment?: string;
}

function fetchConcerts() {
  return fetch(
    "https://docs.google.com/spreadsheets/d/1nB21GAF1Yknomu2jN7xqXg1_gBCrWalkqygytQyUP0E/gviz/tq?gid=445078617",
    { next: { revalidate: 30 } }
  ).then((a) =>
    a.text().then((s) => {
      const json = s.substring(47, s.length - 2);

      return (
        JSON.parse(json)
          // @ts-ignore
          .table.rows.map(({ c }) => c.map((x) => x?.v))
          // @ts-ignore
          .filter((_, i) => i >= 1)
          // @ts-ignore
          .map((a) => ({
            date: a[0],
            time: a[1],
            venue: a[2],
            city: a[3],
            url: a[4],
            comment: a[5],
          })) as Concert[]
      );
    })
  );
}

export default fetchConcerts;
