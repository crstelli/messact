function calcDate(value) {
  const dateObj = new Date(value);

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();

  const date = { year, month, day };
  return date;
}

export { calcDate };
