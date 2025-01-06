import { Button, Dialog, Paper, TextField } from "@mui/material";
import { useContext } from "react";
import ScootersContext from "../context/ScootersContext";

export default function ScootersUpdateDialog({
  isUpdateModalOpen,
  setUpdateModalOpen,
}) {
  const { selectedScooter } = useContext(ScootersContext);
  async function handleSubmit() {}
  console.log(selectedScooter?.registrationCode);
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
              Create
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
