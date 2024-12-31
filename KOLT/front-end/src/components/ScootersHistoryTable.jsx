import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import ScootersContext from "../context/ScootersContext";

export default function ScootersHistoryTable() {
  const { selectedScooterHistory } = useContext(ScootersContext);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth: "120px" }}>Start Date</TableCell>
            <TableCell>Starting Mileage</TableCell>
            <TableCell>Ending Mileage</TableCell>
            <TableCell sx={{ minWidth: "120px" }}>End Date</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedScooterHistory.map((history, index) => (
            <Row key={`history-${index}`} data={history} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Row({ data }) {
  return (
    <TableRow>
      <TableCell>
        {new Date(data.startingLeaseDate).toLocaleDateString("lt-LT")}
      </TableCell>
      <TableCell>{data.startingRideKm}</TableCell>
      <TableCell>{data.endingRideKm}</TableCell>
      <TableCell>
        {new Date(data.endingLeaseDate).toLocaleDateString("lt-LT")}
      </TableCell>
      <TableCell>{data.leasingPrice.toFixed(2)}€</TableCell>
    </TableRow>
  );
}
