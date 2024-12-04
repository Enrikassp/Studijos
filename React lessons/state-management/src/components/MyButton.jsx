export default function MyButton(props) {
  return (
    <button className="bg-blue-600 text-white px-6 py-1 rounded" {...props}>
      {props.children}
    </button>
  );
}
