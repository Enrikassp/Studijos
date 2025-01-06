import { useEffect, useState } from "react";

export default function useScooterData() {
  const [allScooters, setAllScooters] = useState([]);
  const [selectedScooterHistory, setSelectedScooterHistory] = useState([]);
  const [selectedScooterId, setSelectedScooterId] = useState(null);
  const [selectedScooter, setSelectedScooter] = useState(null);

  useEffect(() => {
    async function fetchScooterData() {
      const promise = await fetch("/server/api/scooters");
      const scootersData = await promise.json();
      setAllScooters(scootersData);
    }
    fetchScooterData();
  }, []);

  function addNewScooter(newScooter) {
    setAllScooters((c) => [
      ...c,
      { ...newScooter, scooter_lease_histories: [] },
    ]);
  }

  function selectScooter(id) {
    const foundScooter = allScooters.find((scooter) => scooter.id === id);
    if (!foundScooter) return;
    setSelectedScooterHistory(foundScooter.scooter_lease_histories);
    setSelectedScooterId(foundScooter.id);
    setSelectedScooter(foundScooter);
  }

  function clearSelectedScooter() {
    setSelectedScooterHistory([]);
    setSelectedScooterId(null);
    setSelectedScooter(null);
  }

  function deleteScooter(id) {
    const filteredScooters = allScooters.filter((scooter) => scooter.id !== id);
    setAllScooters(filteredScooters);
  }

  return {
    allScooters,
    addNewScooter,
    selectedScooterHistory,
    selectScooter,
    selectedScooter,
    clearSelectedScooter,
    selectedScooterId,
    deleteScooter,
  };
}
