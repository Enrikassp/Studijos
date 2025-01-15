import { useContext } from "react";
import SessionContext from "../context/SessionContext";
import useLogout from "../custom-hooks/useLogout";
import Paper from "@mui/material/Paper";
import ScootersTable from "../components/ScootersTable";
import { Button, TablePagination, Typography } from "@mui/material";
import ScootersHistoryTable from "../components/ScootersHistoryTable";
import ScootersContext from "../context/ScootersContext";
import useScooterData from "../custom-hooks/useScooterData";
import ScooterActions from "../components/ScooterActions";
export default function Dashboard() {
  const { sessionState } = useContext(SessionContext);
  const logout = useLogout();
  const {
    allScooters,
    selectedScooterHistory,
    selectScooter,
    clearSelectedScooter,
    selectedScooterId,
    addNewScooter,
    deleteScooter,
    selectedScooter,
    pagination,
    scootersCount,
    updateScooter,
    updateScooterHistory,
  } = useScooterData();

  return (
    <ScootersContext.Provider
      value={{
        scooters: allScooters,
        selectedScooterHistory,
        selectScooter,
        clearSelectedScooter,
        selectedScooterId,
        addNewScooter,
        deleteScooter,
        selectedScooter,
        scootersCount,
        updateScooter,
        updateScooterHistory,
      }}
    >
      <main id="dashboard" className="container">
        <div className="main-grid p-5">
          <Paper className="item nav flex justify-between items-center">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-2xl">Dashboard</h1>
              <Typography>Sign in As: {sessionState.user.username}</Typography>
              <Button onClick={logout} variant="outlined">
                Log out
              </Button>
            </div>
            <div className="text-right">
              <Typography>
                Total Scooters: <b>{scootersCount.allScootersCount}</b>
              </Typography>
              <Typography>
                Busy Scooters: <b>{scootersCount.busyScootersCount}</b>
              </Typography>
              <Typography>
                Available Scooters:
                <b>{scootersCount.availableScootersCount}</b>
              </Typography>
            </div>
          </Paper>
          <Paper className="item item-1 overflow-y-auto">
            <PaperHeader>Scooters</PaperHeader>
            <ScootersTable />
            <TablePagination
              component="div"
              count={scootersCount.allScootersCount}
              page={pagination.pageNumber}
              onPageChange={(_, page) => {
                pagination.setPageNumber(page);
              }}
              rowsPerPage={pagination.rowsPerPage}
              onRowsPerPageChange={(e) => {
                pagination.setRowsPerPage(e.target.value);
              }}
              rowsPerPageOptions={[5, 10, 15, 20]}
            />
          </Paper>
          <Paper className="item item-2">
            <PaperHeader>Scooter History</PaperHeader>
            <ScootersHistoryTable />
          </Paper>

          <Paper className="item item-3">
            <PaperHeader>Scooter Actions</PaperHeader>
            <ScooterActions />
          </Paper>
        </div>
      </main>
    </ScootersContext.Provider>
  );
}

function PaperHeader({ children }) {
  return <h1 className="mb-2 font-semibold text-xl">{children}</h1>;
}
