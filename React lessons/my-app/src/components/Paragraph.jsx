import Button from "./Button";

export default function Paragraph(props) {
  return (
    <>
      <p className="paragrafas">lorem ipsum {props.value} dolor sit amet</p>
      <Button>Skaityti daugiau</Button>
    </>
  );
}
