export default class Runner {
  #name;
  #secondName;
  #age;
  #weight;
  #id;
  #category;
  constructor(name, secondName, age, weight) {
    this.#name = name;
    this.#secondName = secondName;
    this.#age = age;
    this.#weight = weight;
    this.#id = null;
    this.#category = null;
  }

  registerToMarathon(id, category, marathon) {
    if (this.#id === null && this.#category === null) {
      this.#id = id;
      this.#category = category;
    } else {
      console.error("Begikas jau yra užregistruotas");
    }
  }

  unregisterFromMarathon() {
    if (this.#id !== null || this.#category !== null) {
      this.#id = null;
      this.#category = null;
    } else {
      console.error("Begikas nėra užregistruotas");
    }
  }

  get category() {
    return this.#category;
  }

  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  get secondName() {
    return this.#secondName;
  }
  get age() {
    return this.#age;
  }
  get weight() {
    return this.#weight;
  }

  get fullName() {
    return `${this.#name} ${this.secondName}`;
  }
}
