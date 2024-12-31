import { useContext } from "react";
import SessionContext from "../context/SessionContext";
import useLogout from "../custom-hooks/useLogout";
import Paper from "@mui/material/Paper";
import ScootersTable from "../components/ScootersTable";
import { Button, Typography } from "@mui/material";
import ScootersHistoryTable from "../components/ScootersHistoryTable";
import ScootersContext from "../context/ScootersContext";
import useScooterData from "../custom-hooks/useScooterData";
export default function Dashboard() {
  const { sessionState } = useContext(SessionContext);
  const logout = useLogout();
  const {
    allScooters,
    selectedScooterHistory,
    selectScooter,
    clearSelectedScooter,
    selectedScooterId,
  } = useScooterData();

  return (
    <ScootersContext.Provider
      value={{
        scooters: allScooters,
        selectedScooterHistory,
        selectScooter,
        clearSelectedScooter,
        selectedScooterId,
      }}
    >
      <main id="dashboard" className="container">
        <div className="main-grid p-5">
          <Paper className="item nav">
            <h1 className="font-bold text-2xl">Dashboard</h1>
            <Typography>
              Prisijungęs kaip: {sessionState.user.username}
            </Typography>
            <Button onClick={logout} variant="outlined">
              Log out
            </Button>
          </Paper>
          <Paper className="item item-1 overflow-y-auto">
            <PaperHeader>Scooters</PaperHeader>
            <ScootersTable />
          </Paper>
          <Paper className="item item-2">
            <PaperHeader>Scooter History</PaperHeader>
            <ScootersHistoryTable />
          </Paper>

          <Paper className="item item-3">
            <PaperHeader>Scooter Actions</PaperHeader>
          </Paper>
        </div>
      </main>
    </ScootersContext.Provider>
  );
}

function PaperHeader({ children }) {
  return <h1 className="mb-2 font-semibold text-xl">{children}</h1>;
}
