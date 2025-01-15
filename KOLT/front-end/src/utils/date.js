export function showDate(date) {
  if (typeof date === "string")
    return new Date(date).toLocaleDateString("lt-LT");
  else if (date instanceof Date) return date.toLocaleDateString("lt-LT");
  else return "-";
}
