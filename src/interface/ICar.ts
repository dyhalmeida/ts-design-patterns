export interface ICar {
  configure(
    color: string,
    year: string,
    engine: number,
    doors: number,
    seats: number
  ): void
}