import { IVehicle } from "../interfaces/vehicle.interface";
import { Transport } from "./transport";
import { Bike } from './bike'

export class BikeTransport extends Transport {

  protected createTransport(): IVehicle {
    return new Bike()
  }

}
