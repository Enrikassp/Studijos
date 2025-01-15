export class Car {
	#marke: CarMarks;
	#metai: number;
	#spalva: CarColor;
	#galiaKw: number;

	constructor(initializeObj: CarType) {
		this.#marke = initializeObj.marke;
		this.#metai = initializeObj.metai;
		this.#spalva = initializeObj.spalva;
		this.#galiaKw = initializeObj.galiaKw;
	}

	get thisObj(): CarType {
		return {
			marke: this.#marke,
			metai: this.#metai,
			galiaKw: this.#galiaKw,
			spalva: this.#spalva,
		};
	}
	get marke() {
		return this.#marke;
	}
	get metai() {
		return this.#metai;
	}
	get spalva() {
		return this.#spalva;
	}
	get galiaKw() {
		return this.#galiaKw;
	}
	// set marke(marke: CarMarks) {
	// 	this.#marke = marke;
	// }
	set metai(metai: number) {
		this.#metai = metai;
	}
	set spalva(spalva: CarColor) {
		this.#spalva = spalva;
	}
	set galiaKw(galiaKw: number) {
		this.#galiaKw = galiaKw;
	}
}
