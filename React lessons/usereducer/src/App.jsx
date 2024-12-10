import { useReducer } from "react";
import { reducer } from "./reducers/productsReducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    prekesPavadinimas: "",
    prekesVntKaina: 0,
    prekiuKiekis: 1,
    kainaBePvm: 0,
    kainaSuPvm: 0,
    allProduct: [],
  });

  function handleNumberChange(e) {
    const newNumber = +e.target.value;
    if (isNaN(newNumber)) {
      return;
    }

    if (e.target.name === "pricePerUnit") {
      dispatch({ type: "KeistiPrekesVntKaina", payload: newNumber });
    } else if (e.target.name === "quantity") {
      dispatch({ type: "KeistiPrekiuKieki", payload: Math.trunc(newNumber) });
    }
  }

  function kaina(kainaNum) {
    if (typeof kainaNum === "number") return kainaNum.toFixed(2);
    else {
      const kainaSk = +kainaNum;
      if (!isNaN(kainaSk)) return kainaSk.toFixed(2);
      return kainaNum;
    }
  }
  return (
    <div>
      <div>
        <input
          type="text"
          name="productName"
          placeholder="Prekės pavadinimas"
          value={state.prekesPavadinimas}
          onChange={(e) =>
            dispatch({
              type: "KeistiPrekesPavadinima",
              payload: e.target.value,
            })
          }
        />
      </div>
      <div>
        <input
          type="text"
          name="pricePerUnit"
          placeholder="Vieneto kaina"
          // value={state.prekesVntKaina}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <input
          type="number"
          name="quantity"
          placeholder="Kiekis"
          value={state.prekiuKiekis}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="subtotal"
          placeholder="Kaina be PVM"
          value={kaina(state.kainaBePvm)}
        />
      </div>
      <div>
        <input
          type="text"
          name="total"
          placeholder="Kaina su PVM"
          value={kaina(state.kainaSuPvm)}
        />
      </div>

      <button onClick={() => dispatch({ type: "PridetiProduktaISarasa" })}>
        Pridėti produktą
      </button>

      <hr />
      {state.allProduct.map((product, index) => (
        <>
          <div key={`product-${index}`}>
            <h3>{product.prekesPavadinimas}</h3>
            <p>
              <b>Vieneto kaina:</b> <i>{product.prekesVntKaina}</i>
            </p>
            <p>
              <b>Prekių kiekis:</b> <i>{product.prekiuKiekis}</i>
            </p>
            <p>
              <b>Suma be PVM:</b> <i>{kaina(product.kainaBePvm)}€</i>
            </p>
            <p>
              <b>Suma su PVM:</b> <i>{kaina(product.kainaSuPvm)}€</i>
            </p>
          </div>

          <hr />
        </>
      ))}
    </div>
  );
}

export default App;
