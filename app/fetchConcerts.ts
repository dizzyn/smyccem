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
    "https://docs.google.com/spreadsheets/d/1nB21GAF1Yknomu2jN7xqXg1_gBCrWalkqygytQyUP0E/gviz/tq?gid=1623556782",
    { next: { revalidate: 30 } }
  ).then((a) =>
    a.text().then((s) => {
      const match = s.match(
        /google\.visualization\.Query\.setResponse\((.*)\)/
      );
      if (!match || !match[1]) {
        throw new Error("Invalid response from Google Sheets");
      }
      const json = JSON.parse(match[1]);

      return (
        json// @ts-ignore
        .table.rows
          .map(({ c }: any) => c.map((x: any) => x?.f ?? x?.v))
          // @ts-ignore
          .filter((a: any) => a[0])
          // @ts-ignore
          .map((a: any) => ({
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
