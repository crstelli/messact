function compareDate(date1, date2) {
  if (date1.year !== date2.year) return false;
  if (date1.month !== date2.month) return false;
  if (date1.day !== date2.day) return false;

  return true;
}

export { compareDate };
