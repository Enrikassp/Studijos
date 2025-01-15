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
import { showDate } from "../utils/date";
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
      <TableCell align="center">{showDate(data.startingLeaseDate)}</TableCell>
      <TableCell align="center">{data.startingRideKm}</TableCell>
      <TableCell align="center">{data.endingRideKm}</TableCell>
      <TableCell align="center">{showDate(data.endingLeaseDate)}</TableCell>
      <TableCell align="center">
        {!data.leasingPrice ? "-" : data.leasingPrice + "€"}
      </TableCell>
    </TableRow>
  );
}
