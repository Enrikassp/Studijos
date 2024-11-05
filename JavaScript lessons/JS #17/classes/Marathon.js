import { addRunnerToTable } from "../DOM/runnersTable.js";
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

  pridetiBegika(runner) {
    // instanceoff patikrina is kokios klases yra sudarytas objektas
    if (!(runner instanceof Runner)) {
      return console.error(
        "Pridedamas bėgikas privalo būti objektas, sudarytas iš klasės 'Runner'"
      );
    }

    // Pridejimas prie vienos is trieju kategoriju
    const runnerID = this.#idCounter.next().value;
    const runnerCategory = this.#priskirtiBegikuiKategorija(runner);
    runner.registerToMarathon(runnerID, runnerCategory);
    // addRunnerToTable(runner, runnerCategory);
  }
}
