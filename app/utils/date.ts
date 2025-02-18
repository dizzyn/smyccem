export const parseDate = (date: string) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

export const getDate = (date: string) => {
  return date.split("-")[2];
};

export const getMonth = (date: string) => {
  return date.split("-")[1];
};

export const getMonthStr = (date: string) => {
  const i = Number(date.split("-")[1]);
  return {
    1: "led",
    2: "úno",
    3: "bře",
    4: "dub",
    5: "kvě",
    6: "čvn",
    7: "čnc",
    8: "srp",
    9: "zář",
    10: "říj",
    11: "lis",
    12: "pro",
  }[i];
};
