import { readJsonFile } from "./utils/readJsonFile.js";

const dateLanguageWithMonts = readJsonFile(
  "./jsonData/dateLanguageWithMonths.json"
);
const currentDate = new Date();

export function getMonthDay() {
  const currentMonthDay = currentDate.getDate();

  return currentMonthDay;
}

export function getTodaysWeekDay() {
  const currentDay = currentDate.getDay();

  return currentDay === 0 ? 7 : currentDay;
}

export function getTodaysDayWeekTranslate(language, weekday) {
  return dateLanguageWithMonts[language].days[weekday];
}

export function getThisMonth() {
  const currentMonth = currentDate.getMonth() + 1;

  return currentMonth;
}

export function getThisMonthTranslate(language, month) {
  return dateLanguageWithMonts[language].months[month];
}

export function getYears() {
  const currentYear = currentDate.getFullYear();
  return currentYear;
}

export function getFullDate() {
  const currentFullDate = `${getYears()}-${getThisMonth()
    .toString()
    .padStart(2, "0")}-${getMonthDay().toString().padStart(2, "0")}`;

  return currentFullDate;
}
