import { IVehicle } from "../interface/IVehicle";
import { IVehicleCar } from "../interface/IVehicleCar";

export class Car implements IVehicle, IVehicleCar {

  constructor(color: string, year: string, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats)
  }

  configurationCar(color: string, year: string, engine: number, seats: number): void {
    console.log(`Criando carro na cor ${color}, do ano de ${year}, com motor ${engine} e ${seats} assentos`)
    this.startVehicle()
  }
  startVehicle(): void {
    console.log('Ligando os motores')
  }

}
