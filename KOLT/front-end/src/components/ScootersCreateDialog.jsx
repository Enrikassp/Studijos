import {
  Alert,
  Button,
  Dialog,
  Paper,
  Snackbar,
  TextField,
} from "@mui/material";
import { ScooterCreateSchema } from "../utils/validations/ScooterSchema";
import { useContext, useState } from "react";
import ScootersContext from "../context/ScootersContext";

export default function ScootersCreateDialog({
  isCreateModalOpen,
  setCreateModalOpen,
}) {
  const { addNewScooter } = useContext(ScootersContext);
  const [isSnackBarOpen, setSnackBarOpen] = useState(false);
  const [snacbarMessage, setSnacbarMessage] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newScooterData = ConvertFormToObject(event, formData);
    const validationResult = ScooterCreateSchema.safeParse(newScooterData);

    if (!validationResult.success) {
      setSnackBarOpen(true);
      setSnacbarMessage(validationResult.error.issues[0].message);
      return;
    }

    const promise = await fetch("/server/api/scooters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newScooterData),
    });

    if (promise.ok) {
      const response = await promise.json();
      setCreateModalOpen(false);
      addNewScooter(response);
    } else {
      const response = await promise.json();

      if (promise.status !== 400) {
        setSnacbarMessage(response.message);
        setSnackBarOpen(true);
      }
    }
  }

  function ConvertFormToObject(event, formData) {
    const newScooterData = {};

    for (const [key, val] of formData.entries()) {
      const inputElement = event.target.elements[key];
      if (inputElement && inputElement.type === "number") {
        newScooterData[key] = Number(val);
      } else {
        newScooterData[key] = val;
      }
    }

    return newScooterData;
  }

  return (
    <Dialog
      open={isCreateModalOpen}
      onClose={() => setCreateModalOpen(false)}
      maxWidth="sm"
    >
      <Paper sx={{ p: 3 }}>
        <DialogHeader />

        <form
          className="flex flex-col gap-5 min-w-[400px]"
          onSubmit={handleSubmit}
        >
          <TextField
            type="text"
            label="Registration Code"
            name="registrationCode"
            variant="outlined"
          />
          <TextField
            type="number"
            label="Ride Tariff Per Km"
            name="rideTariffPerKm"
            variant="outlined"
            inputProps={{ step: "0.01" }}
          />
          <TextField
            type="number"
            label="Lease Tariff Per Min"
            name="leaseTariffPerMin"
            variant="outlined"
            inputProps={{ step: "0.01" }}
          />

          <div className="flex gap-2 justify-end">
            <Button variant="outlined" type="submit">
              Create
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setCreateModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Paper>

      <Snackbar
        open={isSnackBarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackBarOpen(setSnackBarOpen)}
      >
        <Alert
          severity="error"
          color="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snacbarMessage}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}

function DialogHeader() {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-semibold m-0 p-0">Scooter Creation</h1>
      <p className="text-md text-gray-500 m-0 p-0">
        Here you can create a new scooter.
      </p>
    </div>
  );
}
