export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    Object.getOwnPropertySymbols(this).forEach((symbol) => {
      clonedCar[symbol] = this[symbol];
    });
    return clonedCar;
  }
}
