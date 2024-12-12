export const toDate = (value: string | null | undefined): Date | null => {
  return value ? new Date(value) : null;
};

export const formatDateToMMDD = (dateString: string): string => {
  // input dateString 형식: YYYY-MM-DD
  const [year, month, day] = dateString.split('-');
  return `${parseInt(month, 10)}/${parseInt(day, 10)}`;
};
