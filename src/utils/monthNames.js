const monthNames = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Maio",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const fullMonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function generateMonthYearStringWithOffset(date, offset = 0) {
  let newDate = new Date(date.getUTCFullYear(), date.getMonth() + offset);
  let str = monthNames[newDate.getMonth()];
  str += ", ";
  str += newDate.getUTCFullYear();
  return str;
}

export default monthNames;
