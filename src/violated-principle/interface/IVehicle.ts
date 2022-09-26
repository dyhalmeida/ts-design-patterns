export interface IVehicle {
  startVehicle(): void
  configurationCar(color: string, year: string, engine: number, seats: number): void
  configurationMotocycle(color: string, year: string, engine: number): void
}