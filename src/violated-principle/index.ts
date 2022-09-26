import { Car } from "./class/Car";
import { Motocycle } from "./class/Motocycle";

export class VioletedPrinciple {

  public main(): void {

    const car = new Car('Vermelha', '2020', 1.8, 4)
    const motocycle = new Motocycle('Branca', '2022', 250)

  }

}