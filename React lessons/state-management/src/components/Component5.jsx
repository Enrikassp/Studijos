import Component4 from "./Component4";

export default function Component5({ prop1, prop2, color }) {
  return (
    <div style={{ color }}>
      <Component4 prop1={prop1} prop2={prop2} />
    </div>
  );
}
