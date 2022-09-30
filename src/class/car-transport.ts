import { IVehicle } from "../interfaces/vehicle.interface";
import { Transport } from "./transport";
import { Car } from "./car";

export class CarTransport extends Transport {
  
  protected createTransport(): IVehicle {
    return new Car()
  }

}
