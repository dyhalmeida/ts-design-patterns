import { IVehicle } from '../interfaces/vehicle.interface'

export class Motocycle implements IVehicle {

  startRoute(): void {
    this.getCargo()
    console.log('Iniciando a entrega...')
  }
  getCargo(): void {
    console.log('Pegamos a encomenda, estamos pronto!')
  }

}
