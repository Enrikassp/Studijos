import SubmitButton from "./SubmitButton";

export default function LoggedPage({ switchPage }) {
  const [data] = JSON.parse(localStorage.getItem("loggedUser"));

  function handleSignOut() {
    localStorage.removeItem("loggedUser");
    switchPage("login");
  }
  return (
    <div>
      <p>Sveiki prisijungę {data.username}</p>

      <div>
        <h3>Jūsų duomenys:</h3>
        <p>Elektroninis paštas: {data.email}</p>
        <p>Telefono numeris: {data.phone}</p>
      </div>

      <SubmitButton onClick={handleSignOut}>Atsijungti</SubmitButton>
    </div>
  );
}
