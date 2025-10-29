export function formatDate(time) {
  const date = new Date(time);
  const formatter = new Intl.DateTimeFormat("it-IT", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return formatter.format(date);
}
