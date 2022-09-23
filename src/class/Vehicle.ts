export class Vehicle {

  constructor(
    private color: string,
    private year: string,
    private engine: number,
    private doors: number,
    private seats: number
  ){}
  
  car(): void {

    console.log(`Criando um carro: ${this.color}, ${this.year}, ${this.engine} potência, ${this.doors} portas com ${this.seats} assentos`)

    this.startVehicle()

  }

  motocycle(): void {

    console.log(`Criando uma moto: ${this.color}, ${this.year}, ${this.engine} cilindradas`)

    this.startVehicle()

  }

  startVehicle(): void {
    console.log('LIgando o motor...')
  }

}