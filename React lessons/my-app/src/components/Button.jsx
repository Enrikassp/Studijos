export default function Button(props) {
  const styles = {
    fontSize: "25px",
    color: "red",
  };
  return <button style={styles}>{props.children}</button>;
}
