/**
 * Components
 */
class Engine {

  constructor(private _power: number){}

  get power(): number {
    return this._power
  }

  set power(power: number) {
    this._power = power
  }

}

enum Transmission {
  MANUAL,
  AUTOMATIC,
  AUTOMATIC_SEQUENTIAL
}

enum VehicleType {
  SEDAN = 'SEDAN',
  SPORTCAR = 'SPORTCAR',
  SUV = 'SUV',
  PICKUPTRUCK = 'PICKUPTRUCK',
  TRUCK = 'TRUCK',
  MOTORCYCLE = 'MOTORCYCLE'
}

class Wheel {

  constructor(private _rim: number){}

  get rim(): number {
    return this._rim
  }

  set rim(rim: number) {
    this._rim = rim
  }

}
/**
 * End components
 */

/**
 * Product
 */
class Vehicle {

  private _vehicleType: VehicleType
  private _seats: number
  private _engine: Engine
  private _transmission: Transmission
  private _wheels: Wheel[] = []

  public addWheel(wheel: Wheel): void {
    this._wheels.push(wheel)
  }

  get wheels(): Wheel[] {
    return this._wheels
  }

  get wheelsCount(): number {
    return this._wheels.length
  }

  set vehicleType(value: VehicleType) {
    this._vehicleType = value
  }

  get vehicleType(): VehicleType {
    return this._vehicleType
  }

  set seats(value: number) {
    this._seats = value
  }

  get seats(): number {
    return this._seats
  }

  set engine(value: Engine) {
    this._engine = value
  }

  get engine(): Engine {
    return this._engine
  }

  set transmission(value: Transmission) {
    this._transmission = value
  }

  get transmission(): Transmission {
    return this._transmission
  }

}

/**
 * Builder and Interface
 */

interface IBuilder {
  reset(): void
  getVehicle(): Vehicle
  addWheel(value: Wheel): void
  setVehicleType(value: VehicleType): void
  setSeats(value: number): void
  setEngine(value: Engine): void
  setTransmission(value: Transmission): void
}

class VehicleBuilder implements IBuilder {

  private _vehicle = new Vehicle()

  reset(): void {
    this._vehicle = new Vehicle()
  }

  getVehicle(): Vehicle {
    const vehicle = this._vehicle
    this._vehicle = new Vehicle()
    return vehicle
  }

  addWheel(value: Wheel): void {
    this._vehicle.addWheel(value)
  }

  setVehicleType(value: VehicleType): void {
    this._vehicle.vehicleType = value
  }

  setSeats(value: number): void {
    this._vehicle.seats = value
  }

  setEngine(value: Engine): void {
    this._vehicle.engine = value
  }

  setTransmission(value: Transmission): void {
    this._vehicle.transmission = value
  }

}

/**
 * Manager
 */
class Manager {

  constructor(private _builder: IBuilder) {}

  createSedanCar() {
    this._builder.setVehicleType(VehicleType.SEDAN)
    this._builder.setSeats(5)
    this._builder.setTransmission(Transmission.AUTOMATIC)
    this._builder.setEngine(new Engine(1600))
    this._builder.addWheel(new Wheel(15))
    this._builder.addWheel(new Wheel(15))
    this._builder.addWheel(new Wheel(15))
    this._builder.addWheel(new Wheel(15))
  }

  createTruck() {
    this._builder.setVehicleType(VehicleType.TRUCK)
    this._builder.setSeats(3)
    this._builder.setTransmission(Transmission.AUTOMATIC_SEQUENTIAL)
    this._builder.setEngine(new Engine(13000))
    this._builder.addWheel(new Wheel(22))
    this._builder.addWheel(new Wheel(22))
    this._builder.addWheel(new Wheel(22))
    this._builder.addWheel(new Wheel(22))
    this._builder.addWheel(new Wheel(22))
    this._builder.addWheel(new Wheel(22))
  }

  createMotorcycle() {
    this._builder.setVehicleType(VehicleType.MOTORCYCLE)
    this._builder.setSeats(1)
    this._builder.setTransmission(Transmission.MANUAL)
    this._builder.setEngine(new Engine(200))
    this._builder.addWheel(new Wheel(15))
    this._builder.addWheel(new Wheel(15))
  }

}


function main() {

  const builder = new VehicleBuilder()
  const manager = new Manager(builder)

  manager.createSedanCar()
  const sedan = builder.getVehicle()
  console.table(sedan)

  manager.createTruck()
  const truck = builder.getVehicle()
  console.table(truck)

  manager.createMotorcycle()
  const motorcycle = builder.getVehicle()
  console.table(motorcycle)

}

main()
