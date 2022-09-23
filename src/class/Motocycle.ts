import { IMotocycle } from "../interface/IMotocyle"
import { IVehicle } from "../interface/IVehicle"

export class Motocycle implements IMotocycle, IVehicle {

  constructor(private color: string, year: string, engine: number) {
    this.configure(color, year, engine)
  }

  startVehicle(): void {
    console.log('Ligando a moto...')
  }
  configure(color: string, year: string, engine: number): void {
    console.log(`Criando uma moto: ${color}, ${year}, ${engine} cilindradas`)
    this.startVehicle()
  }

}