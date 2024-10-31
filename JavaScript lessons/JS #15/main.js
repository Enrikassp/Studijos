// https://randomuser.me/api/?results=100&nat=au,gb,us

async function main() {
  const response = await fetch(
    "https://randomuser.me/api/?results=100&nat=au,gb,us"
  );
  const dataFromFetch = await response.json();
  const peopleArray = dataFromFetch.results;

  const customPeopleArray = peopleArray.map((user) => {
    return {
      firstName: user.name.first,
      lastName: user.name.last,
      country: user.location.country,
      city: user.location.city,
      email: user.email,
      dateOfBirth: user.dob.date,
      phone: user.phone,
      nat: user.nat,
    };
  });

  console.log(customPeopleArray);
  const sortedByFirstNamePeopleArray = customPeopleArray.sort(
    (personA, personB) => {
      if (personA.firstName < personB.firstName) {
        return -1;
      }

      if (personA.firstName > personB.firstName) {
        return 1;
      }

      return 0;
    }
  );
}
main();
