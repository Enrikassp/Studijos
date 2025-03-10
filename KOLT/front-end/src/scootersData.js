const scooters = [
  {
    id: 1,
    registrationCode: "87986554",
    lastUseTime: "2024-12-12T00:00:00.000Z",
    isBusy: true,
    totalRide: 47.8,
    rideTariffPerKm: 0.15,
    leaseTariffPerMin: 0.15,
    history: [],
  },
  {
    id: 2,
    registrationCode: "57489234",
    lastUseTime: "2024-12-10T00:00:00.000Z",
    isBusy: false,
    totalRide: 123.5,
    rideTariffPerKm: 0.2,
    leaseTariffPerMin: 0.18,
    history: [
      {
        startingRideKm: 124.0,
        endingRideKm: 125.0,
        startingLeaseDate: "2024-12-11T00:00:00.000Z",
        endingLeaseDate: "2024-12-12T00:00:00.000Z",
        leasingPrice: 24.5,
        city: "Vilnius",
      },
      {
        startingRideKm: 126.0,
        endingRideKm: 127.5,
        startingLeaseDate: "2024-12-13T00:00:00.000Z",
        endingLeaseDate: "2024-12-14T00:00:00.000Z",
        leasingPrice: 30.75,
        city: "Kaunas",
      },
    ],
  },
  {
    id: 3,
    registrationCode: "32981723",
    lastUseTime: "2024-12-15T00:00:00.000Z",
    isBusy: true,
    totalRide: 89.6,
    rideTariffPerKm: 0.25,
    leaseTariffPerMin: 0.22,
    history: [
      {
        startingRideKm: 90.0,
        endingRideKm: 91.0,
        startingLeaseDate: "2024-12-16T00:00:00.000Z",
        endingLeaseDate: "2024-12-17T00:00:00.000Z",
        leasingPrice: 18.9,
        city: "Klaipeda",
      },
      {
        startingRideKm: 91.5,
        endingRideKm: 93.0,
        startingLeaseDate: "2024-12-18T00:00:00.000Z",
        endingLeaseDate: "2024-12-19T00:00:00.000Z",
        leasingPrice: 25.5,
        city: "Vilnius",
      },
      {
        startingRideKm: 93.5,
        endingRideKm: 94.0,
        startingLeaseDate: "2024-12-20T00:00:00.000Z",
        endingLeaseDate: "2024-12-21T00:00:00.000Z",
        leasingPrice: 10.75,
        city: "Kaunas",
      },
      {
        startingRideKm: 94.2,
        endingRideKm: 95.0,
        startingLeaseDate: "2024-12-22T00:00:00.000Z",
        endingLeaseDate: "2024-12-23T00:00:00.000Z",
        leasingPrice: 12.5,
        city: "Siauliai",
      },
    ],
  },
  {
    id: 4,
    registrationCode: "64598234",
    lastUseTime: "2024-11-30T00:00:00.000Z",
    isBusy: false,
    totalRide: 67.2,
    rideTariffPerKm: 0.15,
    leaseTariffPerMin: 0.13,
    history: [
      {
        startingRideKm: 67.5,
        endingRideKm: 68.5,
        startingLeaseDate: "2024-12-01T00:00:00.000Z",
        endingLeaseDate: "2024-12-02T00:00:00.000Z",
        leasingPrice: 12.6,
        city: "Panevezys",
      },
      {
        startingRideKm: 69.0,
        endingRideKm: 70.0,
        startingLeaseDate: "2024-12-03T00:00:00.000Z",
        endingLeaseDate: "2024-12-04T00:00:00.000Z",
        leasingPrice: 14.3,
        city: "Vilnius",
      },
      {
        startingRideKm: 70.5,
        endingRideKm: 71.0,
        startingLeaseDate: "2024-12-05T00:00:00.000Z",
        endingLeaseDate: "2024-12-06T00:00:00.000Z",
        leasingPrice: 8.25,
        city: "Kaunas",
      },
    ],
  },
  {
    id: 5,
    registrationCode: "12837465",
    lastUseTime: "2024-12-20T00:00:00.000Z",
    isBusy: true,
    totalRide: 210.3,
    rideTariffPerKm: 0.3,
    leaseTariffPerMin: 0.28,
    history: [
      {
        startingRideKm: 211.0,
        endingRideKm: 213.0,
        startingLeaseDate: "2024-12-21T00:00:00.000Z",
        endingLeaseDate: "2024-12-22T00:00:00.000Z",
        leasingPrice: 35.5,
        city: "Vilnius",
      },
      {
        startingRideKm: 213.5,
        endingRideKm: 215.0,
        startingLeaseDate: "2024-12-23T00:00:00.000Z",
        endingLeaseDate: "2024-12-24T00:00:00.000Z",
        leasingPrice: 28.75,
        city: "Klaipeda",
      },
      {
        startingRideKm: 215.5,
        endingRideKm: 216.0,
        startingLeaseDate: "2024-12-25T00:00:00.000Z",
        endingLeaseDate: "2024-12-26T00:00:00.000Z",
        leasingPrice: 11.8,
        city: "Kaunas",
      },
      {
        startingRideKm: 216.5,
        endingRideKm: 217.0,
        startingLeaseDate: "2024-12-27T00:00:00.000Z",
        endingLeaseDate: "2024-12-28T00:00:00.000Z",
        leasingPrice: 10.6,
        city: "Panevezys",
      },
    ],
  },
];

export default scooters;
