import { useContext } from "react";
import SessionContext from "../context/SessionContext";
import useLogout from "../custom-hooks/useLogout";
import Paper from "@mui/material/Paper";
import ScootersTable from "../components/ScootersTable";

export default function Dashboard() {
  const { sessionState } = useContext(SessionContext);
  const logout = useLogout();

  return (
    <main id="dashboard" className="m-2 box-border">
      <div className="main-grid">
        <Paper className="item nav">
          <h1>Dashboard</h1>
          <h2>Prisijungęs kaip: {sessionState.user.username}</h2>
          <button onClick={logout}>Log out</button>
        </Paper>
        <Paper className="item item-1 overflow-y-auto">
          <ScootersTable />
        </Paper>
        <Paper className="item item-2">item-2</Paper>
        <Paper className="item item-3">item-3</Paper>
      </div>
    </main>
  );
}
