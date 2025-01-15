import { useEffect, useState } from "react";

export default function useScooterData() {
  const [allScooters, setAllScooters] = useState([]);
  const [selectedScooterHistory, setSelectedScooterHistory] = useState([]);
  const [selectedScooterId, setSelectedScooterId] = useState(null);
  const [selectedScooter, setSelectedScooter] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageNumber, setPageNumber] = useState(0);
  const [scootersCount, setScootersCount] = useState({
    allScootersCount: 0,
    busyScootersCount: 0,
    availableScootersCount: 0,
  });
  useEffect(() => {
    async function getScootersCount() {
      const promise = await fetch("/server/api/scooters/count");
      const response = await promise.json();
      setScootersCount(response);
    }
    getScootersCount();
  }, [allScooters]);

  useEffect(() => {
    async function fetchScooterData() {
      const promise = await fetch(
        `/server/api/scooters?history=true&page=${pageNumber}&rowsPerPage=${rowsPerPage}`
      );
      if (promise.ok) {
        const response = await promise.json();
        setAllScooters(response);
      }
    }
    fetchScooterData();
  }, [rowsPerPage, pageNumber]);

  function addNewScooter(newScooter) {
    setAllScooters((c) => [...c, { ...newScooter, history: [] }]);
  }

  function selectScooter(id) {
    const foundScooter = allScooters.find((scooter) => scooter.id === id);
    if (!foundScooter) return;
    setSelectedScooterHistory(foundScooter.history);
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
  function updateScooter(id, newValues) {
    const originalScootersArray = [...allScooters];
    const foundScooterIndex = allScooters.findIndex(
      (scooter) => scooter.id == id
    );
    if (!foundScooterIndex) return;

    originalScootersArray[foundScooterIndex] = {
      ...originalScootersArray[foundScooterIndex],
      ...newValues,
    };
    setSelectedScooter(originalScootersArray[foundScooterIndex]);
    setAllScooters(originalScootersArray);
  }

  function updateScooterHistory(newScooterHistory) {
    // atrandame indeksą masyve, kurią istoriją keisti
    const foundScooterHistoryIndex = selectedScooterHistory.findIndex(
      (h) => h.id === newScooterHistory.id
    );
    const foundScooterIndex = allScooters.findIndex(
      (scooter) => scooter.id === newScooterHistory.scooterId
    );
    if (foundScooterHistoryIndex === -1 || foundScooterIndex === -1) return;
    const newScooterHistories = [...selectedScooterHistory];
    const newScooters = [...allScooters];

    newScooterHistories[foundScooterHistoryIndex] = newScooterHistory;
    newScooters[foundScooterIndex].history = newScooterHistories;
    setSelectedScooterHistory(newScooterHistories);
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
    updateScooterHistory,
    pagination: {
      setPageNumber,
      pageNumber,
      setRowsPerPage,
      rowsPerPage,
    },
    scootersCount,
    updateScooter,
  };
}
