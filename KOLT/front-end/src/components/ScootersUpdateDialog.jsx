import { Button, Dialog, Paper, TextField } from "@mui/material";
import { useContext } from "react";
import ScootersContext from "../context/ScootersContext";
import { ScooterUpdateSchema } from "../utils/validations/ScooterSchema";

export default function ScootersUpdateDialog({
  isUpdateModalOpen,
  setUpdateModalOpen,
}) {
  const { selectedScooter, updateScooter } = useContext(ScootersContext);
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = ConvertFormToObject(e, formData);
    const validationResult = ScooterUpdateSchema.safeParse(values);

    if (!validationResult.success)
      alert(validationResult.error.issues[0].message);

    const promise = await fetch(`/server/api/scooters/${selectedScooter.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const response = await promise.json();

    if (!promise.ok) {
      alert(response.message);
    } else {
      updateScooter(selectedScooter.id, values);
      setUpdateModalOpen(false);
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
      open={isUpdateModalOpen}
      onClose={() => setUpdateModalOpen(false)}
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
            defaultValue={selectedScooter?.registrationCode}
          />
          <TextField
            type="number"
            label="Ride Tariff Per Km"
            name="rideTariffPerKm"
            variant="outlined"
            inputProps={{ step: "0.01" }}
            defaultValue={selectedScooter?.rideTariffPerKm}
          />
          <TextField
            type="number"
            label="Lease Tariff Per Min"
            name="leaseTariffPerMin"
            variant="outlined"
            inputProps={{ step: "0.01" }}
            defaultValue={selectedScooter?.leaseTariffPerMin}
          />

          <div className="flex gap-2 justify-end">
            <Button variant="outlined" type="submit">
              Update
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setUpdateModalOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Paper>
    </Dialog>
  );
}

function DialogHeader() {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-semibold m-0 p-0">Scooter Updation</h1>
      <p className="text-md text-gray-500 m-0 p-0">
        Here you can update a scooter.
      </p>
    </div>
  );
}
