import { IVehicle } from '../interface/IVehicle'

export class Car implements IVehicle {

  constructor(color: string, year: string, engine: number, seats: number) {
    this.configurationCar(color, year, engine, seats)
  }

  startVehicle(): void {
    console.log('Ligando os motores')
  }

  configurationCar(color: string, year: string, engine: number, seats: number): void {
    console.log(`Criando carro na cor ${color}, do ano de ${year}, com motor ${engine} e ${seats} assentos `)
    this.startVehicle()
  }

  /**
   * Método que a classe está dependendo mas que não será utilizado
   * Aqui estamos quebrando o ISP
   */
  configurationMotocycle(color: string, year: string, engine: number): void {
    throw new Error('Method not implemented.');
  }

}