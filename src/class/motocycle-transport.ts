import { IVehicle } from "../interfaces/vehicle.interface";
import { Transport } from "./transport";
import { Motocycle } from "./motocycle";

export class MotocycleTransport extends Transport {

  protected createTransport(): IVehicle {
    return new Motocycle()
  }
  
}