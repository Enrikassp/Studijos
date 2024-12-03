import "./App.css";
import Paragraph from "./components/Paragraph";

function App() {
  const x = 5;
  const y = 6;
  const z = 7;
  const a = 8;
  return (
    <div className="App">
      <Paragraph value={x} />
      <Paragraph value={y} />
      <Paragraph value={z} />
      <Paragraph value={a} />
    </div>
  );
}

export default App;
