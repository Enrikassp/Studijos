export async function checkLoginData(loginData) {
  const promise = await fetch(
    `http://localhost:8080/login/?loginData=${JSON.stringify(loginData)}`
  );

  try {
    const response = await promise.json();

    if (response.message) {
      Toastify({
        text: response.message,
        className: "info",
        style: {
          background: "red",
        },
      }).showToast();
      return false;
    }
    return response;
  } catch (err) {
    console.error(`Klaida mano getAllUsers funkcijoje: ${err.message}`);
  }
}

export async function removeMoneyFromUser(data) {
  const promise = await fetch(`http://localhost:8080/user/removeMoney`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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

export async function addMoneyToUser(data) {
  const promise = await fetch(`http://localhost:8080/user/addMoney`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
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
