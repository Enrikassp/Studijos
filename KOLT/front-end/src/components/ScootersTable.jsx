import {
  Chip,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useContext } from "react";
import ScootersContext from "../context/ScootersContext";

export default function ScootersTable() {
  const { scooters } = useContext(ScootersContext);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Number</TableCell>
            <TableCell>Registration Code</TableCell>
            <TableCell>Last use time</TableCell>
            <TableCell>Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {scooters.map((data) => (
            <Row key={data.id} data={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Row({ data }) {
  const { selectScooter, selectedScooterId, clearSelectedScooter } =
    useContext(ScootersContext);
  const open = selectedScooterId === data.id;

  function selectOrClearScooter() {
    if (open) {
      return clearSelectedScooter();
    }

    selectScooter(data.id);
  }

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={selectOrClearScooter}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell>{data.id}</TableCell>
        <TableCell>{data.registrationCode}</TableCell>
        <TableCell>
          {new Date(data.lastUseTime).toLocaleDateString("lt-LT")}
        </TableCell>
        <TableCell className="flex">
          <Chip
            label={data.isBusy ? "Busy" : "Available"}
            color={data.isBusy ? "error" : "success"}
            variant="outlined"
          />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div className="p-5">
              <Typography
                variant="h7"
                gutterBottom
                component="div"
                fontWeight="600"
              >
                Advanced Parameters
              </Typography>

              <div className="advanced-parameter-row">
                <div>RIDA</div>
                <div>{data.totalRide}km</div>
              </div>
              <div className="advanced-parameter-row">
                <div>KAINA (KM)</div>
                <div>{data.rideTariffPerKm.toFixed(2)}€</div>
              </div>
              <div className="advanced-parameter-row">
                <div>KAINA (MIN)</div>
                <div>{data.leaseTariffPerMin.toFixed(2)}€</div>
              </div>
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
