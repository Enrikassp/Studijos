export default class Rectangle {
  #width;
  #height;
  #area;
  #perimeter;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;

    this.#area = width * height;
    this.#perimeter = (width + height) * 2;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get area() {
    return this.#area;
  }

  get perimeter() {
    return this.#perimeter;
  }

  set width(newWidth) {
    this.#width = newWidth;
    this.#area = newWidth * this.#height;
    this.#perimeter = (newWidth + this.#height) * 2;
  }

  set height(newHeight) {
    this.#height = newHeight;
    this.#area = newHeight * this.#width;
    this.#perimeter = (newHeight + this.#width) * 2;
  }
}
