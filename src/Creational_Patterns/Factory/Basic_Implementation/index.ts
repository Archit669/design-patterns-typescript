abstract class Car {
  constructor(public model: string, public productionYear: number) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  displayCarInfo() {
    console.log(
      `This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class SUV extends Car {
  displayCarInfo() {
    console.log(
      `This is an SUV. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class Hatchback extends Car {
  displayCarInfo() {
    console.log(
      `This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class CarFactory {
  public createCar(type: string, model: string, productionYear: number): Car {
    switch (type) {
      case "Sedan":
        return new Sedan(model, productionYear);
      case "SUV":
        return new SUV(model, productionYear);
      case "Hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar("Sedan", "Camry", 2023);
sedan.displayCarInfo();
// This is a Sedan. Model: Camry, Production Year: 2023

const suv = carFactory.createCar("SUV", "RAV4", 2023);
suv.displayCarInfo(); //
// This is an SUV. Model: RAV4, Production Year: 2023

const hatchback = carFactory.createCar("Hatchback", "Corolla", 2023);
hatchback.displayCarInfo();
// This is a Hatchback. Model: Corolla, Production Year: 2023
