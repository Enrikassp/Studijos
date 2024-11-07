import {
  getFullDate,
  getMonthDay,
  getThisMonth,
  getThisMonthTranslate,
  getTodaysDayWeekTranslate,
  getTodaysWeekDay,
  getYears,
} from "./getDate.js";
import { createTxtFile } from "./utils/createTxtFile.js";
import { readJsonFile } from "./utils/readJsonFile.js";

const settings = readJsonFile("./jsonData/settings.json");
const currentMonth = getThisMonthTranslate(settings.language, getThisMonth());
const weekDay = getTodaysDayWeekTranslate(
  settings.language,
  getTodaysWeekDay()
);
const dateText = `Metai: ${getYears()}\nMėnuo: ${currentMonth}\nMėnesio diena: ${getMonthDay()}\nSavaitės diena: ${weekDay}`;

createTxtFile(getFullDate(), dateText);
