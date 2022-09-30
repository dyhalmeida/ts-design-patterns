import { IVehicle } from "../interfaces/vehicle.interface";

export class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando a entrega...')
  }
  getCargo(): void {
    console.log('Pegamos os alimentos, estamos prontos!')
  }

}