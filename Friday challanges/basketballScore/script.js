let quarter = 1;
let gameLog = [];
let fouls = [
  [0, 0, 0], // [1 komandos] - Pražangos [0 -- Pirmas žaidejas, 0 -- Antras žaidejas, 0 -- Trecias žaidejas]
  [0, 0, 0], // [2 komandos] - Pražangos [0 -- Pirmas žaidejas, 0 -- Antras žaidejas, 0 -- Trecias žaidejas]
];

//Funkcija kuri prideda taškus
function addPoints(points, team) {
  if (quarter === 5) return;
  const teamResultElement = document.querySelector(`.resultTeam-${team}`);
  const time = new Date().toLocaleTimeString();
  const sakinys = `Komanda ${team} pelnė ${points} taškus (${time})`;
  gameLog.push({
    team: team,
    points: points,
    tekstas: sakinys,
  });
  updateLog();
  const getResults = sumResults(team);
  teamResultElement.innerHTML = `Rezultatas: ${getResults[team - 1]}`;
}

//Funkcija, kuri prideda prašangą
function addFoul(player, team) {
  if (quarter === 5) return;
  const komandosGavimas = team - 1; // Gavome komandos indeksa
  const zaidejoGavimas = player - 1; // Gavome zaidejo indeksa
  const time = new Date().toLocaleTimeString();
  fouls[komandosGavimas][zaidejoGavimas] += 1; // Pakeiteme komandos žaidėjo pražangos skaičių
  const vardoLaukelis = document.querySelector(
    `.player${player}-input-team${team}`
  );

  const vardas = vardoLaukelis.value;

  if (vardas !== "")
    gameLog.push({
      tekstas: `Komandos ${team}  ${vardas} gavo pražangą (${time})`,
    });
  else {
    gameLog.push({
      tekstas: `Komandos ${team} žaidėjas ${player} gavo pražangą (${time})`,
    });
  }

  updateLog();
  updateFoulDisplay(player, team);
}

//Funkcija atvaizduojanti pražangą
function updateFoulDisplay(player, team) {
  // player - 2 //team - 1
  const zaidejoPrazangosElementas = document.getElementById(
    `fouls-team${team}-player${player}`
  ); // fouls-team1-player1
  const komandosGavimas = team - 1; // Gavome komandos indeksa
  const zaidejoGavimas = player - 1; // Gavome zaidejo indeksa

  zaidejoPrazangosElementas.innerHTML = `Pražangos: ${fouls[komandosGavimas][zaidejoGavimas]}`;
}

//Funkcija įrašanti įrašą į protokolą
function updateLog() {
  const logContainer = document.getElementById("log");
  let html = ``;

  for (let index = 0; index < gameLog.length; index++) {
    html += `<span>${gameLog[index].tekstas}</span>`;
  }

  logContainer.innerHTML = html;
}

//Kėlinio ir varžybų baigimo funkcija
function endQuarter() {
  if (quarter === 5) return;
  if (quarter <= 3) {
    gameLog.push({
      tekstas: `Kelinys ${quarter} baigtas`,
    });

    quarter += 1; // Po kiekvieno paspaudimu prisideda naujas kelinys
  } else {
    gameLog.push({
      tekstas: `Varžybos baigtos.`,
    });
    getTeamWinner();
    quarter += 1;
  }

  updateLog();
}

// Rezultato sumavimas

function sumResults() {
  let totalTeam1Points = 0;
  let totalTeam2Points = 0;

  for (let index = 0; index < gameLog.length; index++) {
    if (gameLog[index].team == 1) {
      totalTeam1Points += gameLog[index].points;
    } else if (gameLog[index].team == 2) {
      totalTeam2Points += gameLog[index].points;
    }
  }

  return [totalTeam1Points, totalTeam2Points];
}

// Gauname komandos laimėjimas
function getTeamWinner() {
  const getResults = sumResults();

  if (getResults[0] > getResults[1]) {
    gameLog.push({
      tekstas: `Laimėjo pirma komanda`,
    });
  } else if (getResults[1] > getResults[0]) {
    gameLog.push({
      tekstas: `Laimėjo antra komanda`,
    });
  } else {
    gameLog.push({
      tekstas: `Lygisios`,
    });
  }

  updateLog();
}
