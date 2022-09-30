import { IVehicle } from "../interfaces/vehicle.interface";

export abstract class Transport {
  startTransport(): void {
    const vehicle = this.createTransport()
    vehicle.startRoute()
  }

  /**
   * Factory method
   */
  protected abstract createTransport(): IVehicle

}
