import { useContext } from "react";
import SessionContext from "../context/SessionContext";
export default function Dashboard() {
  const { sessionState, setSessionState } = useContext(SessionContext);
  async function logout() {
    const promise = await fetch("/server/api/auth/logout");

    if (promise.ok) {
      window.location.href = "/login";
      setSessionState({
        user: {
          email: "",
          username: "",
        },
        isLogged: true,
      });
    } else {
      const response = await promise.json();
      alert(response.message);
    }
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Prisijungęs kaip: {sessionState.user.username}</h2>
      <button onClick={logout}>Log out</button>
    </div>
  );
}
