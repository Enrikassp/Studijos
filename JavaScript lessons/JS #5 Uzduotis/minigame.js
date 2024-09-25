function flipCoin() {
  const coin = document.querySelector(".coin");
  const status_text = document.querySelector("#status-text");
  const coin_status = document.querySelector("#coin-status");
  const throwCoinFunction = throwCoin();
  const coinSelection = document.querySelector("#coinSelection");
  const winnerStatus = document.querySelector(".winnerStatus");
  winnerStatus.style.display = "none";

  if (coinSelection.value === "herbas" || coinSelection.value === "skaicius") {
    coin.classList.toggle("animate");

    setTimeout(() => {
      if (throwCoinFunction === "H") {
        coin.src = "images/1-Euro-back.png";
        coin_status.innerText = "herbas";

        if (coinSelection.value === "herbas") {
          status_text.innerText = "laimėjote";
          status_text.style.color = "rgb(27, 197, 27)";
        } else {
          status_text.innerText = "pralaimėjote";
          status_text.style.color = "rgb(202, 71, 48)";
        }

        winnerStatus.style.display = "block";
      } else {
        console.log("LANDED SKAIC");
        coin.src = "images/1-Euro.png";
        coin_status.innerText = "skaicius";

        if (coinSelection.value === "skaicius") {
          status_text.innerText = "laimėjote";
          status_text.style.color = "rgb(27, 197, 27)";
        } else {
          status_text.innerText = "pralaimėjote";
          status_text.style.color = "rgb(202, 71, 48)";
        }

        winnerStatus.style.display = "block";
      }

      coin.classList.remove("animate");
    }, 1000);
  } else {
    alert("Pasirinkite monetą");
  }
}
