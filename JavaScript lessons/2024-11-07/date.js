// require - commonJS tipo javascript failams
// import  - module tipo javascript failams

// const fs = require("fs");

import * as fs from "fs";

const settings = readJsonFile("settings.json");
const dateLanguage = readJsonFile("dateLanguage.json");

const weekDay = getTodaysWeekDay();
const weekDayTranslated = getTodaysWeekDayTranslate(settings.language, weekDay);

function readJsonFile(filePath) {
  const fileData = fs.readFileSync(filePath);
  const parsedData = JSON.parse(fileData);
  return parsedData;
}

function getTodaysWeekDay() {
  const currentDate = new Date();
  const weekDay = currentDate.getDay();

  return weekDay === 0 ? 7 : weekDay;
}

export function getTodaysWeekDayTranslate(language, weekday) {
  return dateLanguage[language][weekday];
}
