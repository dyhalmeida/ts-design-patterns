import { ICar } from "../interface/ICar";
import { IVehicle } from "../interface/IVehicle";

export class Car implements ICar, IVehicle {

  constructor(
    private color: string,
    private year: string,
    private engine: number,
    private doors: number,
    private seats: number
  ){
    this.configure(color, year, engine, doors, seats)
  }

  startVehicle(): void {
    console.log("Ligando o carro...");
  }
  configure(color: string, year: string, engine: number, doors: number, seats: number): void {
    console.log(`Criando um carro: ${this.color}, ${this.year}, ${this.engine} potência, ${this.doors} portas com ${this.seats} assentos`)
    this.startVehicle()
  }

}