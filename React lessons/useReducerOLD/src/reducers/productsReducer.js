// state, action
// state: {
//     prekesVntKaina: 0,
//     prekiuKiekis: 0,
//     kainaBePvm: 0,
//     kainaSuPvm: 0
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
    default:
      throw new Error("No such action");
  }
}

function changeProductUnitPrice() {}
