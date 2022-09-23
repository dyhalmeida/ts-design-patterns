import { Vehicle } from "./class/Vehicle"
import { VehicleType } from "./enum/VehicleTYpe"

let vehicle
let type = VehicleType.MOTOCYCLE

if (type === VehicleType.CAR) {
  vehicle = new Vehicle('Branco', '2020', 2.0, 4, 4)
  vehicle.car()
} else if (type === VehicleType.MOTOCYCLE) {
  vehicle = new Vehicle('Vermelha', '2020', 2.0, 0, 1)
  vehicle.motocycle()
}