import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car();
    Object.getOwnPropertySymbols(this).forEach((symbol) => {
      clonedCar[symbol] = this[symbol];
    });
    return clonedCar;
  }
}
