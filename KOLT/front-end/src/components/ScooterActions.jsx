import { Button } from "@mui/material";
import { useContext, useState } from "react";
import ScootersContext from "../context/ScootersContext";
import ScootersCreateDialog from "./ScootersCreateDialog";

export default function ScooterActions() {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const { selectedScooterId } = useContext(ScootersContext);

  return (
    <div className="mt-[2.5rem] flex justify-around">
      <Button
        variant="outlined"
        color="success"
        onClick={() => setCreateModalOpen(true)}
      >
        Create Scooter
      </Button>
      <ScootersCreateDialog
        isCreateModalOpen={isCreateModalOpen}
        setCreateModalOpen={setCreateModalOpen}
      />
      <Button
        variant="outlined"
        color="primary"
        disabled={selectedScooterId === null}
      >
        Update Scooter
      </Button>
      <Button
        variant="outlined"
        color="error"
        disabled={selectedScooterId === null}
      >
        Delete Scooter
      </Button>
    </div>
  );
}
