import { useEffect, useState } from "react";
import scooters from "../scootersData";

export default function useScooterData() {
  const [allScooters, setAllScooters] = useState([]);
  const [selectedScooterHistory, setSelectedScooterHistory] = useState([]);
  const [selectedScooterId, setSelectedScooterId] = useState(null);

  useEffect(() => {
    async function fetchScooterData() {
      // FETCH API FOR SCOOTERS
      setAllScooters(scooters);
    }
    fetchScooterData();
  }, []);

  function selectScooter(id) {
    const foundScooter = allScooters.find((scooter) => scooter.id === id);
    if (!foundScooter) return;
    setSelectedScooterHistory(foundScooter.history);
    setSelectedScooterId(foundScooter.id);
  }

  function clearSelectedScooter() {
    setSelectedScooterHistory([]);
    setSelectedScooterId(null);
  }

  return {
    allScooters,
    selectedScooterHistory,
    selectScooter,
    clearSelectedScooter,
    selectedScooterId,
  };
}
