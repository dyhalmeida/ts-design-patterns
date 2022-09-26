import { Car } from './class/Car'
import { Motocycle } from './class/Motocycle'

export class AppliedPrinciple {

  public main(): void {
    const car = new Car('Prata', '2022', 2.0, 4)
    const motocycle = new Motocycle('Azul', '2022', 120)
  }
}
