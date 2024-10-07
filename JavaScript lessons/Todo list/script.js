// Prideti uzduoti, istrinti uzduoti, atlikta uzduotis, grazinti uzduoti
// Gauti dabartine tekstu

// UZDUOTIS
/*
{
    title: "Pavadinimas",
    data: "2024-10-02",
    statusas: "active" | "finished"
}

*/
console.log(gautiDabartineDataTekstu());
htmlAtnaujinimas();
function gautiDabartineDataTekstu() {
  const dabartineData = new Date();
  const metai = dabartineData.getFullYear(), // 2024
    menuo = dabartineData.getMonth() + 1, // 10
    diena = dabartineData.getDay(); // 2

  return `${metai} - ${`${menuo}`.padStart(2, "0")} - ${`${diena}`.padStart(
    2,
    "0"
  )}`;
}

function sukurtiUzduoti() {
  const uzduotiesTekstas = document.querySelector("#uzduotiesLaukelis").value;
  const naujaUzduotis = {
    name: uzduotiesTekstas,
    date: gautiDabartineDataTekstu(),
    statusas: "active",
  };

  pridetiIlocalStorage(naujaUzduotis);
  htmlAtnaujinimas();
}

function padarytiUzduoti(uzduotis) {
  alert("test");
  let uzduotys = gautiIsLocalStorage();
  console.log("padarome uzduoti");
  uzduotys[uzduotis].statusas = "finished";
  pridetiIlocalStorage(uzduotys);
}

function htmlAtnaujinimas() {
  const uzduociuSarasas = document.querySelector("#aktyviosUzduotys");
  const atliktosUzduotys = document.querySelector("#atliktosUzduotys");
  const uzduotys = gautiIsLocalStorage();
  uzduociuSarasas.innerHTML = "";
  atliktosUzduotys.innerHTML = "";
  let aktyviosUzduotysHTML = "";
  let atliktosUzduotysHTML = "";

  uzduotys.map((item, index) => {
    if (item.statusas === "active") {
      aktyviosUzduotysHTML += `
               <div
                      class="tasks bg-white mt-3 p-2 rounded d-flex justify-content-between align-items-center"
                    >
                  <span class="title">${item.name}</span>
                  <i class="task-date d-inline-block ms-5">${item.date}</i>
      
                  <div class="btn-group">
                      <button class="btn btn-primary" onclick="padarytiUzduoti(${index})">Užduotis atlikta</button>
                      <button class="btn btn-danger" onclick="istrintiUzduoti(${index})">Ištrinti</button>
                  </div>
              </div>
      
            `;
      uzduociuSarasas.innerHTML = aktyviosUzduotysHTML;
    } else {
      atliktosUzduotysHTML += `
        <div
            class="tasks bg-dark-subtle mt-3 p-2 rounded d-flex justify-content-between align-items-center"
          >
            <span class="title">${item.name}</span>
            <i class="task-date d-inline-block ms-5">${item.date}</i>

            <div class="btn-group">
              <button class="btn btn-primary" onclick="grazintiUzduoti(${index})">Gražinti užduotį</button>
              <button class="btn btn-danger" onclick="istrintiUzduoti(${index})">Ištrinti</button>
            </div>
          </div>
        `;
      atliktosUzduotys.innerHTML = atliktosUzduotysHTML;
    }
  });
}

function gautiIsLocalStorage() {
  const tasks = localStorage.getItem("uzduotys");
  return tasks ? tasks : [];
}

function pridetiIlocalStorage(data) {
  localStorage.setItem("uzduotys", JSON.stringify(data));
}
