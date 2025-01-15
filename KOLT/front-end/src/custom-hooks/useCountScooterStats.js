export default function useCountScooterStats(allScooters) {
  const totalScooters = allScooters.length;
  const totalBusyScooters = allScooters.filter(
    (scooter) => scooter.isBusy
  ).length;
  const totalAvailableScooters = totalScooters - totalBusyScooters;

  return { totalScooters, totalBusyScooters, totalAvailableScooters };
}
