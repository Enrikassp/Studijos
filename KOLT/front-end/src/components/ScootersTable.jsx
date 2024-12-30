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
import { useState } from "react";

const scooters = [
  {
    id: 1,
    registrationCode: "87986554",
    lastUseTime: "2024-12-12T00:00:00.000Z",
    isBusy: true,
    totalRide: 47.8,
    rideTariffPerKm: 0.15,
    leaseTariffPerMin: 0.15,
  },
  {
    id: 2,
    registrationCode: "57489234",
    lastUseTime: "2024-12-10T00:00:00.000Z",
    isBusy: false,
    totalRide: 123.5,
    rideTariffPerKm: 0.2,
    leaseTariffPerMin: 0.18,
  },
  {
    id: 3,
    registrationCode: "32981723",
    lastUseTime: "2024-12-15T00:00:00.000Z",
    isBusy: true,
    totalRide: 89.6,
    rideTariffPerKm: 0.25,
    leaseTariffPerMin: 0.22,
  },
  {
    id: 4,
    registrationCode: "64598234",
    lastUseTime: "2024-11-30T00:00:00.000Z",
    isBusy: false,
    totalRide: 67.2,
    rideTariffPerKm: 0.15,
    leaseTariffPerMin: 0.13,
  },
  {
    id: 5,
    registrationCode: "12837465",
    lastUseTime: "2024-12-20T00:00:00.000Z",
    isBusy: true,
    totalRide: 210.3,
    rideTariffPerKm: 0.3,
    leaseTariffPerMin: 0.28,
  },
];

export default function ScootersTable() {
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
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
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
