import { addRunnerToTable, istrintiBegika } from "../DOM/runnersTable.js";
import Runner from "./Runner.js";

export default class Marathon {
  #IKategorijosBegikai;
  #IIKategorijosBegikai;
  #IIIKategorijosBegikai;
  #idCounter;

  constructor() {
    this.#IKategorijosBegikai = [];
    this.#IIKategorijosBegikai = [];
    this.#IIIKategorijosBegikai = [];
    this.#idCounter = this.idGenerator();
  }

  *idGenerator(i = 0) {
    while (true) {
      i += 1;
      yield i;
    }
  }

  get begikuSkaicius() {
    return (
      this.#IKategorijosBegikai.length +
      this.#IIKategorijosBegikai.length +
      this.#IIIKategorijosBegikai.length
    );
  }

  get IKategorijosBegikai() {
    return this.#IKategorijosBegikai;
  }

  get IIKategorijosBegikai() {
    return this.#IIKategorijosBegikai;
  }

  get IIIKategorijosBegikai() {
    return this.#IIIKategorijosBegikai;
  }

  #priskirtiBegikuiKategorija(runner) {
    if (runner.weight <= 60) {
      this.#IKategorijosBegikai.push(runner);
      return "I";
    } else if (runner.weight > 60 && runner.weight <= 90) {
      this.#IIKategorijosBegikai.push(runner);
      return "II";
    } else {
      this.#IIIKategorijosBegikai.push(runner);
      return "III";
    }
  }

  findRunnerById(runnerId) {
    const allRunners = [
      ...this.#IKategorijosBegikai,
      ...this.#IIKategorijosBegikai,
      ...this.#IIIKategorijosBegikai,
    ];

    return allRunners.find((runner) => runner.id === runnerId) || null;
  }

  pridetiBegika(runner) {
    if (!(runner instanceof Runner)) {
      return console.error(
        "Pridedamas bėgikas privalo būti objektas, sudarytas iš klasės 'Runner'"
      );
    }

    if (runner.id !== null) {
      return console.error(
        "Pridedamas bėgikas jau yra užregistruotas maratone"
      );
    }

    const runnerID = this.#idCounter.next().value;
    const runnerCategory = this.#priskirtiBegikuiKategorija(runner);
    runner.registerToMarathon(runnerID, runnerCategory);
    addRunnerToTable(runner);
  }

  #pasalintiIsKategorijuMasyvo(runner) {
    let kategorijosMasyvas;

    switch (runner.category) {
      case "I":
        kategorijosMasyvas = this.#IKategorijosBegikai;
        break;
      case "II":
        kategorijosMasyvas = this.#IIKategorijosBegikai;
        break;
      case "III":
        kategorijosMasyvas = this.#IIIKategorijosBegikai;
        return;
    }

    const index = kategorijosMasyvas.findIndex((val) => runner.id === val.id);
    kategorijosMasyvas.splice(index, 1);
  }

  pasalintiBegika(runner) {
    this.#pasalintiIsKategorijuMasyvo(runner);
    istrintiBegika(runner.id);
    runner.unregisterFromMarathon();
  }
}
