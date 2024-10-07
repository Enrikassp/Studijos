function getInputValues() {
  const prekesElementas = document.querySelector("#preke");
  const kainosElementas = document.querySelector("#kaina");
  const kiekioElementas = document.querySelector("#kiekis");

  const preke = prekesElementas.value;
  const kaina = kainosElementas.value;
  const kiekis = kiekioElementas.value;

  return { preke, kaina, kiekis };
}

function saveProductToCart() {
  const uzsakymas = getInputValues();
  const gautaReiksme = localStorage.getItem("ManoPrekiuKrepselis");
  const prekiuMasyvas = gautaReiksme === null ? [] : JSON.parse(gautaReiksme);
  prekiuMasyvas.push(uzsakymas);
  localStorage.setItem("ManoPrekiuKrepselis", JSON.stringify(prekiuMasyvas));
}
