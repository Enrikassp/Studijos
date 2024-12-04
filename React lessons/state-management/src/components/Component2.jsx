export default function Component2({ children, color = "blue" }) {
  return (
    <h1 className="text-2xl font-bold my-2" style={{ color }}>
      {children}
    </h1>
  );
}
