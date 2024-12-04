import { useState } from "react";
import MyButton from "./MyButton";

export default function State() {
  // const [count, setCount] = useState(5)
  const [count, setCount] = useState(() => {
    console.log("Komponentas susikuria");
    return 5;
  });
  console.log("Persikroviau");
  const doubleCount = count * 2;
  return (
    <div>
      <h2 className="bg-slate-100 text-red-500 p-4 text-2xl">
        Dviguba reikšmė {doubleCount}
      </h2>
      <h2 className="bg-slate-100 text-red-500 p-4 text-2xl">
        Vienguba reikšmė {count}
      </h2>
      <h2
        className="bg-slate-100 p-4 text-2xl"
        style={{ color: count % 2 === 0 ? "blue" : "red" }}
      >
        {count % 2 === 0 ? "Lyginis" : "Nelyginis"}
      </h2>
      <MyButton onClick={() => setCount(count + 1)}>
        Atnaujinti skaičių {count}
      </MyButton>
    </div>
  );
}
