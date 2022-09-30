import { IVehicle } from '../interfaces/vehicle.interface'

export class Car implements IVehicle {

  startRoute(): void {
    this.getCargo()
    console.log('Trajeto iniciado...')
  }
  getCargo(): void {
    console.log('Pegamos os passageiros, estamos pronto!')
  }

}
