export const parseDate = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};

export const getDate = (date: string) => {
  return date.split('-')[2];
};

export const getMonth = (date: string) => {
  return date.split('-')[1];
};
