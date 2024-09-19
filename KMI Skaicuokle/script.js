function calculateBMI() {
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;

  if (weight > 0 && height > 0) {
    let calculateBMI = ((weight / height ** 2) * 10000).toFixed(1);
    let resultsContainer = document.querySelector(".results");
    let resultBMIText = document.querySelector(".resultBMIText");
    let result_risk_level = document.querySelector(".result_risk_level");
    resultsContainer.style.display = "block";

    if (calculateBMI < 18.5) {
      resultBMIText.textContent = calculateBMI;
      result_risk_level.textContent = "Nepakankamas svoris";
      result_risk_level.style.color = "rgb(228, 93, 93)";
    } else if (calculateBMI > 18.5 && calculateBMI < 25) {
      resultBMIText.textContent = calculateBMI;
      result_risk_level.textContent = "Normalus svoris";
      result_risk_level.style.color = "rgb(112, 219, 79)";
    } else if (calculateBMI > 25 && calculateBMI < 30) {
      resultBMIText.textContent = calculateBMI;
      result_risk_level.textContent = "Antsvoris";
      result_risk_level.style.color = "rgb(228, 93, 93)";
    } else {
      resultBMIText.textContent = calculateBMI;
      result_risk_level.textContent = "Nutukimas";
      result_risk_level.style.color = "rgb(228, 93, 93)";
    }
  } else {
    alert("Prasome ivesti ivesties laukelius");
  }
}
