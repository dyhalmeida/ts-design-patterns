import { IVehicle } from "../interface/IVehicle";

export class Motocycle implements IVehicle {

  constructor(color: string, year: string, engine: number) {
    this.configurationMotocycle(color, year, engine)
  }

  startVehicle(): void {
    console.log('Ligando os motores')
  }

   /**
   * Método que a classe está dependendo mas que não será utilizado
   * Aqui estamos quebrando o ISP
   */
  configurationCar(color: string, year: string, engine: number, seats: number): void {
    throw new Error("Method not implemented.");
  }
  configurationMotocycle(color: string, year: string, engine: number): void {
    console.log(`Criando uma moto na cor ${color}, do ano ${year}, com ${engine} cilíndradas`)
    this.startVehicle()
  }

}