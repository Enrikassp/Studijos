// state, action
// state: {
//     prekesVntKaina: 0,
//     prekiuKiekis: 0,
//     kainaBePvm: 0,
//     kainaSuPvm: 0
//     allProducts: []
// }
// action
// {
//   type: "",
//   payload: ""
// }

export function reducer(state, action) {
  switch (action.type) {
    case "KeistiPrekesVntKaina":
      return changeProductUnitPrice(state, action.payload);
    case "KeistiPrekiuKieki":
      return changeProductQuanitity(state, action.payload);
    case "KeistiPrekesPavadinima":
      return { ...state, prekesPavadinimas: action.payload };
    case "PridetiProduktaISarasa":
      return addProductToList(state);
    default:
      throw new Error("No such action");
  }
}

function addProductToList(state) {
  return {
    prekesPavadinimas: "",
    prekesVntKaina: 0,
    prekiuKiekis: 1,
    kainaBePvm: 0,
    kainaSuPvm: 0,
    allProduct: [
      ...state.allProduct,
      {
        prekesVntKaina: state.prekesPavadinimas,
        prekiuKiekis: state.prekiuKiekis,
        kainaBePvm: Number(state.kainaBePvm.toFixed(2)),
        kainaSuPvm: Number(state.kainaSuPvm.toFixed(2)),
      },
    ],
  };
}

function changeProductUnitPrice(state, newPricePerUnit) {
  return {
    ...state,
    prekesVntKaina: newPricePerUnit,
    kainaBePvm: newPricePerUnit * state.prekiuKiekis,
    kainaSuPvm: newPricePerUnit * state.prekiuKiekis * 1.21,
  };
}

function changeProductQuanitity(state, newQuantity) {
  return {
    ...state,
    prekiuKiekis: newQuantity,
    kainaBePvm: newQuantity * state.prekesVntKaina,
    kainaSuPvm: newQuantity * state.prekesVntKaina * 1.21,
  };
}
