import { IVehicle } from '../interface/IVehicle'
import { IVehicleMotocycle } from '../interface/IVehicleMotocycle'

export class Motocycle implements IVehicle, IVehicleMotocycle {

  constructor(color: string, year: string, engine: number) {
    this.configurationMotocycle(color, year, engine)
  }

  configurationMotocycle(color: string, year: string, engine: number): void {
    console.log(`Criando uma moto na cor ${color}, do ano ${year}, com ${engine} cilíndradas`)
    this.startVehicle()
  }

  startVehicle(): void {
    console.log('Ligando os motores')
  }

}
