import { useReducer } from "react";
import { reducer } from "./reducers/productsReducer";

function App() {
  const state = useReducer(reducer, {
    prekesVntKaina: 0,
    prekiuKiekis: 0,
    kainaBePvm: 0,
    kainaSuPvm: 0,
  });

  return (
    <div>
      <div>
        <input type="text" name="pricePerUnit" id="Vieneto kaina" />
      </div>
      <div>
        <input type="number" name="quantity" id="Kiekis" />
      </div>
      <div>
        <input type="text" name="subtotal" id="Kaina be PVM" />
      </div>
      <div>
        <input type="text" name="total" id="Kaina su PVM" />
      </div>
    </div>
  );
}

export default App;
