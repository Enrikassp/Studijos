function temperatureData(data) {
  const allTempDates = data.temperatureData.data;
  const firstTempDate = getFirstDate(allTempDates);
  const lastTempDate = getLastDate(allTempDates);
  const city = data.temperatureData.city;
  const title = document.querySelector(".header");
  const firstDate = document.querySelector(".firstDate");
  const lastDate = document.querySelector(".lastDate");

  title.innerText = title.innerText.replace("{city}", city);
  firstDate.innerText = firstDate.innerText.replace(
    "{data}",
    firstTempDate.date
  );
  lastDate.innerText = lastDate.innerText.replace("{data}", lastTempDate.date);

  const allTemps = [];

  for (const date of allTempDates) {
    allTemps.push(date.hourlyTemperatures);
  }

  const overAllAverageTemp = getOverAllAverageTemp(allTemps);
  const averageTemp = document.querySelector(".averageTemp");
  averageTemp.innerText = averageTemp.innerText.replace(
    "{averageTemp}",
    overAllAverageTemp
  );

  const dailyAverage = getAverageDateTemp(allTempDates);
  displayWarmColdDays(dailyAverage);
}

function getOverAllAverageTemp(temps) {
  let totalTemp = 0;
  let tempCount = 0;

  for (const temp of temps) {
    const times = Object.keys(temp);

    for (const time of times) {
      totalTemp += temp[time];
      tempCount++;
    }
  }

  const averageTemp = totalTemp / tempCount;
  return averageTemp.toFixed(2);
}

function getAverageDateTemp(data) {
  const averages = [];

  for (const date of data) {
    const times = Object.keys(date.hourlyTemperatures);
    let totalTemp = 0;
    let tempCount = 0;

    for (const time of times) {
      totalTemp += date.hourlyTemperatures[time];
      tempCount++;
    }

    const averageTemp = totalTemp / tempCount;

    averages.push({ averageTemp: averageTemp.toFixed(2), date: date.date });
  }

  return averages;
}

function getWarmestDay(data) {
  return data.reduce((warmest, current) => {
    return parseFloat(current.averageTemp) > parseFloat(warmest.averageTemp)
      ? current
      : warmest;
  });
}

function getColdestDay(data) {
  return data.reduce((warmest, current) => {
    return parseFloat(current.averageTemp) < parseFloat(warmest.averageTemp)
      ? current
      : warmest;
  });
}

function displayWarmColdDays(dailyAverage) {
  const warmestDayTemp = document.querySelector(".warmestDayTemp");
  const coldestDayTemp = document.querySelector(".coldestDayTemp");
  warmestDayTemp.innerText = warmestDayTemp.innerText.replace(
    "{data}",
    getColdestDay(dailyAverage).date
  );
  coldestDayTemp.innerText = coldestDayTemp.innerText.replace(
    "{data}",
    getWarmestDay(dailyAverage).date
  );

  warmestDayTemp.innerText = warmestDayTemp.innerText.replace(
    "{temp}",
    getColdestDay(dailyAverage).averageTemp
  );
  coldestDayTemp.innerText = coldestDayTemp.innerText.replace(
    "{temp}",
    getWarmestDay(dailyAverage).averageTemp
  );
}

function getFirstDate(data) {
  return data[0];
}

function getLastDate(data) {
  return data[data.length - 1];
}

fetch("./temperatures.json")
  .then((req) => req.json())
  .then((res) => temperatureData(res));
