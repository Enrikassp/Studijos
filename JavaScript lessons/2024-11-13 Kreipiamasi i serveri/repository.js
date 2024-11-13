export async function getAllUsers() {
  const promise = await fetch("http://localhost:8080/users");

  try {
    if (promise.status !== 200)
      throw new Error("Atsakymas iš serverio yra neigiamas");
    const response = await promise.json();
    return response;
  } catch (err) {
    console.error(`Klaida mano getAllUsers funkcijoje: ${err}`);
  }
}

export async function getUserById(id) {
  const promise = await fetch(`http://localhost:8080/users/${id}`);

  try {
    if (promise.status !== 200)
      throw new Error("Atsakymas iš serverio yra neigiamas");
    const response = await promise.json();
    return response;
  } catch (err) {
    console.error(`Klaida mano getAllUsers funkcijoje: ${err}`);
  }
}

export async function addUser(user) {
  const promise = await fetch(`http://localhost:8080/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  try {
    if (promise.status !== 201)
      throw new Error("Atsakymas iš serverio yra neigiamas");
    const response = await promise.json();
    return response;
  } catch (err) {
    console.error(`Klaida mano getAllUsers funkcijoje: ${err}`);
  }
}

export async function deleteUserById(id) {
  const promise = await fetch(`http://localhost:8080/users/${id}`, {
    method: "DELETE",
  });

  try {
    if (promise.status !== 204)
      throw new Error("Atsakymas iš serverio yra neigiamas");
  } catch (err) {
    console.error(`Klaida mano getAllUsers funkcijoje: ${err}`);
  }
}

export async function updateUserById(id, updateData) {
  const promise = await fetch(`http://localhost:8080/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });

  try {
    if (promise.status !== 201)
      throw new Error("Atsakymas iš serverio yra neigiamas");
    const response = await promise.json();
    return response;
  } catch (err) {
    console.error(`Klaida mano getAllUsers funkcijoje: ${err}`);
  }
}
