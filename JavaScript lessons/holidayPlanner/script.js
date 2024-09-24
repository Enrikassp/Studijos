updateTable();

function checkInputs(
  destiFrom,
  destiTo,
  destiStart,
  destiEnd,
  destiClass,
  destiConnecting
) {
  console.log(destiConnecting <= 0);
  if (
    !isNaN(destiFrom) ||
    destiFrom.length <= 0 ||
    !isNaN(destiTo) ||
    destiTo.length <= 0 ||
    destiStart.length <= 0 ||
    destiEnd.length <= 0 ||
    !isNaN(destiClass) ||
    destiClass.length <= 0 ||
    destiConnecting < 0 ||
    destiConnecting.length <= 0
  ) {
    return false;
  } else {
    return true;
  }
}

function createRoute() {
  const destiFrom = document.querySelector("#destiFrom").value;
  const destiTo = document.querySelector("#destiTo").value;
  const destiStart = document.querySelector("#destiStart").value;
  const destiEnd = document.querySelector("#destiEnd").value;
  const destiClass = document.querySelector("#destiClass").value;
  const destiConnecting = document.querySelector("#destiConnecting").value;
  const checkInputsFunc = checkInputs(
    destiFrom,
    destiTo,
    destiStart,
    destiEnd,
    destiClass,
    destiConnecting
  );

  if (!checkInputsFunc) return alert("NETINKA");
  const calculatedDuration = calculateDestDuration(destiStart, destiEnd);
  const routeData = [
    {
      routeName: `${destiFrom} -> ${destiTo}`,
      routeStart: destiStart.replace("T", " "),
      routeEnd: destiEnd.replace("T", " "),
      routeDuration: calculatedDuration,
      routeClass: destiClass,
      routeConnecting: destiConnecting,
    },
  ];

  saveToLocalStorageData(routeData);
}

function saveToLocalStorageData(newRouteData) {
  const getCurrentData = localStorage.getItem("route");
  let routeArray = [];

  if (getCurrentData === null || getCurrentData === "") {
    routeArray.push(newRouteData);
  } else {
    routeArray = JSON.parse(getCurrentData);
    if (!Array.isArray(routeArray)) {
      routeArray = [];
    }

    routeArray.push(newRouteData);
  }

  localStorage.setItem("route", JSON.stringify(routeArray));
  updateTable();
}

function updateTable() {
  const storedRoutes = localStorage.getItem("route");
  const tableRows = document.querySelector("#tableRows");
  console.log("UPDATING TABLE.....");
  tableRows.innerHTML = "";
  if (storedRoutes) {
    const getRoutes = JSON.parse(storedRoutes);

    if (Array.isArray(getRoutes)) {
      let templateHTML = "";
      for (let i = 0; i < getRoutes.length; i++) {
        templateHTML += `
        <tr class="tableRowData">
          <td><input type="checkbox" name="" id="" /></td>
          <td>(${getRoutes[i][0].routeName})</td>
          <td>(${getRoutes[i][0].routeStart})</td>
          <td>(${getRoutes[i][0].routeEnd})</td>
          <td>(${getRoutes[i][0].routeDuration})</td>
          <td>(${getRoutes[i][0].routeClass})</td>
          <td>(${getRoutes[i][0].routeConnecting})</td>
          <td><button>EDIT</button></td>
        </tr>`;
        console.log(getRoutes[i][0].routeName);
        // append to table

        tableRows.innerHTML = templateHTML;
      }
    }
  }
}

function calculateDestDuration(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const differenceInMs = endDate - startDate;
  const totalMinutes = Math.floor(differenceInMs / (1000 * 60)); // Total minutes
  const hours = Math.floor(totalMinutes / 60); // Get the full hours
  const minutes = totalMinutes % 60; // Get the remaining minutes
  // Format hours and minutes to be two digits
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  return `${formattedHours} hours ${formattedMinutes} mins`;
}
