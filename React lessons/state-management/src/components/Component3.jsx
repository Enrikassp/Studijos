export default function Component3({ children, mode = 1 }) {
  function decideColor() {
    if (mode === 1) return "blue";
    else if (mode === 2) return "red";
    else return "black";
  }
  return <h1 style={{ color: decideColor() }}>{children}</h1>;
}
