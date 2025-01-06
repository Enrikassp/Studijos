import { Alert, Button, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import ScootersContext from "../context/ScootersContext";
import ScootersCreateDialog from "./ScootersCreateDialog";
import ScootersUpdateDialog from "./ScootersUpdateDialog";

export default function ScooterActions() {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const { selectedScooterId, deleteScooter: deleteFromArray } =
    useContext(ScootersContext);
  const [snackbarOptions, setSnackbarOptions] = useState({
    variant: "info",
    message: "",
    isOpen: false,
  });

  async function deleteScooter(id) {
    const response = await fetch(`/server/api/scooters/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      deleteFromArray(id);
      setSnackbarOptions({
        variant: "success",
        message: "Scooter deleted successfully!",
        isOpen: true,
      });
    } else {
      const errorData = await response.json();
      setSnackbarOptions({
        variant: "error",
        message: errorData.message || "Failed to delete scooter.",
        isOpen: true,
      });
    }
  }

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
        onClick={() => setUpdateModalOpen(true)}
      >
        Update Scooter
      </Button>
      <ScootersUpdateDialog
        isUpdateModalOpen={isUpdateModalOpen}
        setUpdateModalOpen={setUpdateModalOpen}
      />
      <Button
        variant="outlined"
        color="error"
        disabled={selectedScooterId === null}
        onClick={() => deleteScooter(selectedScooterId)}
      >
        Delete Scooter
      </Button>

      <Snackbar
        open={snackbarOptions.isOpen}
        autoHideDuration={4000}
        onClose={() =>
          setSnackbarOptions((prev) => ({ ...prev, isOpen: false }))
        }
      >
        <Alert
          severity={snackbarOptions.variant}
          onClose={() =>
            setSnackbarOptions((prev) => ({ ...prev, isOpen: false }))
          }
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarOptions.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
