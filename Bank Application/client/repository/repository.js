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
    console.error(`Klaida mano checkLoginData funkcijoje: ${err.message}`);
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
    console.error(`Klaida mano removeMoneyFromUser funkcijoje: ${err}`);
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
    console.error(`Klaida mano addMoneyToUser funkcijoje: ${err}`);
  }
}

export async function createUserAPI(user) {
  const promise = await fetch(`http://localhost:8080/user/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  try {
    const response = await promise.json();
    if (promise.status !== 201)
      throw new Error("Atsakymas iš serverio yra neigiamas");
    if (response.message && response.variant === "error") {
      Toastify({
        text: response.message,
        className: "info",
        style: {
          background: "red",
        },
      }).showToast();
      return false;
    }
    Toastify({
      text: response.message,
      className: "info",
      style: {
        background: "green",
      },
    }).showToast();
    return true;
  } catch (err) {
    console.error(`Klaida mano createUserAPI funkcijoje: ${err}`);
  }
}
