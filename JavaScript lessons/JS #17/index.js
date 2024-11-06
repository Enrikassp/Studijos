import Marathon from "./classes/Marathon.js";
import Runner from "./classes/Runner.js";
const runner1 = new Runner("Algirdas", "Laiškauskas", 26, 70);

const marathon = new Marathon();

marathon.pridetiBegika(runner1);

const form = document.querySelector(`form`);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("dalyvisName");
  const secondName = formData.get("dalyvisSecondName");
  const weight = +formData.get("dalyvisWeight");
  const age = +formData.get("dalyvisAge");

  const newRunner = new Runner(name, secondName, age, weight);
  marathon.pridetiBegika(newRunner);
  form.reset();
});

window.deleteRunner = function (runnerId) {
  const runner = marathon.findRunnerById(runnerId);

  if (runner) {
    marathon.pasalintiBegika(runner);
  } else {
    console.error("Runner not found");
  }
};
