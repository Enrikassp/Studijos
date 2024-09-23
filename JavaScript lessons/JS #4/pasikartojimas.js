function gautiIvestiIsIvestiesLaukelio() {
  const vardas = vardoIvestis.value;
  const vaiku_kiekis = vaikuKiekioIvestis.value; // "4"
  const vaikuKiekisSk = +vaiku_kiekis; // 4
  if (vaiku_kiekis === "" || vaikuKiekisSk < 0) return;

  console.log(vardas, vaikuKiekisSk);
  console.log(typeof vardas, typeof vaikuKiekisSk);

  if (vaikuKiekisSk === 0) {
    console.log("Siunciame jus į kitą parduotuvę");
  } else if (vaikuKiekisSk >= 1 && vaikuKiekisSk < 5) {
    // 1, 2, 3, 4
    console.log("Siunciame į vaikų skyrių");
  } else {
    //5, 6, 7, 8 .....
    console.log("Siunčiame į vip kambarį");
  }
}

const vardoIvestis = document.querySelector("#vardo-ivestis");
const vaikuKiekioIvestis = document.querySelector("#vaiku-kiekis");
