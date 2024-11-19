import {
  addMoneyToUser,
  checkLoginData,
  removeMoneyFromUser,
} from "./repository/repository.js";

let loggedInAs = JSON.parse(localStorage.getItem("loggedIn") || "null");

console.log(
  "Current Path:",
  window.location.pathname,
  "Logged In As:",
  loggedInAs
);

if (!loggedInAs && window.location.pathname !== "/login/") {
  window.location.replace("/login/");
} else if (loggedInAs) {
  initializeBankHTML();
}

async function loginUser(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const user = formData.get("user");
  const password = formData.get("password");

  const isUserLogin = await checkLoginData({
    username: user,
    password: password,
  });

  if (isUserLogin) {
    localStorage.setItem("loggedIn", JSON.stringify([]));
    localStorage.setItem("loggedIn", JSON.stringify(isUserLogin));
    loggedInAs = isUserLogin;
    window.location.replace("/");
  } else {
    console.error("Invalid login credentials.");
    alert("Incorrect username or password. Please try again.");
  }
}
window.loginUser = loginUser;

function initializeBankHTML() {
  if (!loggedInAs) {
    console.error("No logged-in user data available.");
    return;
  }

  const bankHeader = document.querySelector(".bankHeader");
  const bankBalance = document.querySelector(".bankBalance");

  bankHeader.innerHTML = bankHeader.innerHTML.replace(
    "{username}",
    loggedInAs.username
  );

  bankBalance.innerText = `${loggedInAs.balance || 0}€`;
}

function signoutUser() {
  window.location.replace("/login/");
  localStorage.removeItem("loggedIn");
}
window.signoutUser = signoutUser;

async function addMoney() {
  const depositInput = parseFloat(
    document.querySelector("#depositInput").value
  );

  if (isNaN(depositInput) || depositInput <= 0) {
    Toastify({
      text: "Įveskite taisiklingą išnešimo sumą",
      className: "info",
      style: {
        background: "red",
      },
    }).showToast();
    return;
  }

  if (loggedInAs.balance < depositInput) {
    Toastify({
      text: "Jūs neturite tokios sumos sąskaitoje",
      className: "info",
      style: {
        background: "red",
      },
    }).showToast();
    return;
  }

  const addedMoney = await addMoneyToUser({
    userId: loggedInAs.id,
    withdrawAmount: depositInput,
  });

  if (addedMoney) {
    loggedInAs.balance += depositInput;
    localStorage.setItem("loggedIn", JSON.stringify(loggedInAs));

    initializeBankHTML();
    Toastify({
      text: `Sėkmingai išnešėte iš sąskaitos ${depositInput}€`,
      className: "info",
      style: {
        background: "green",
      },
    }).showToast();
    return;
  }
}
window.addMoney = addMoney;

async function removeMoney() {
  const withdrawInput = parseFloat(
    document.querySelector("#withdrawInput").value
  );

  if (isNaN(withdrawInput) || withdrawInput <= 0) {
    Toastify({
      text: "Įveskite taisiklingą išnešimo sumą",
      className: "info",
      style: {
        background: "red",
      },
    }).showToast();
    return;
  }

  if (loggedInAs.balance < withdrawInput) {
    Toastify({
      text: "Jūs neturite tokios sumos sąskaitoje",
      className: "info",
      style: {
        background: "red",
      },
    }).showToast();
    return;
  }

  const removedMoney = await removeMoneyFromUser({
    userId: loggedInAs.id,
    withdrawAmount: withdrawInput,
  });

  if (removedMoney) {
    loggedInAs.balance -= withdrawInput;
    localStorage.setItem("loggedIn", JSON.stringify(loggedInAs));

    initializeBankHTML();
    Toastify({
      text: `Sėkmingai išnešėte iš sąskaitos ${withdrawInput}€`,
      className: "info",
      style: {
        background: "green",
      },
    }).showToast();
    return;
  }
}
window.removeMoney = removeMoney;
