/**
* Air vehicle Interface
*/
interface IAircraftVehicle {
  startRoute(): void
  getCargo(): void
  checkWind(): void
}

/**
* Vehicles class that implements aircraft vehicle
*/
class Airplane implements IAircraftVehicle {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log('Iniciando a decolagen...')
  }
  getCargo(): void {
    console.log('Pegamos os passageiros, estamos prontos!')
  }
  checkWind(): void {
    console.log('Ventos a 25km/h')
  }
}

class Helicopter implements IAircraftVehicle {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log('Iniciando a decolagen...')
  }
  getCargo(): void {
    console.log('Pegamos os passageiros, estamos prontos, ligando hélices!')
  }
  checkWind(): void {
    console.log('Ventos a 25km/h ao sudeste')
  }
}

/**
* Land vehicles interface
*/
interface ILandVehicle {
  startRoute(): void
  getCargo(): void
}

/**
* Vehicles class that implements land Vehicle
*/
class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando o trajeto...')
  }
  getCargo(): void {
    console.log('Pegamos os passageiros, estamos prontos!')
  }
}

class Motorcycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando o trajeto...')
  }
  getCargo(): void {
    console.log('Pegamos a encomenda, estamos prontos!')
  }
}

/**
 * Factory abstraction interface
 */
interface ITransportFactory {
  createTransportVehicle(): ILandVehicle
  createTransportAircraft(): IAircraftVehicle
}

/**
 * 99 taxi implementation
 */
class NineNineTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Motorcycle()
  }
  createTransportAircraft(): IAircraftVehicle {
    return new Helicopter()
  }
}

/**
 * Uber taxi implementation
 */
class UberTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Car()
  }
  createTransportAircraft(): IAircraftVehicle {
    return new Airplane()
  }
}

/**
 * The commercial, signed another contract with the new company Lime
 * and now we also have to have scooters and drones.
 */
class Scooters implements ILandVehicle {
  startRoute(): void {
    this.getCargo()
    console.log('Iniciando trajeto com patinete...')
  }
  getCargo(): void {
    console.log('Estamos prontos!')
  }
}

class Drones implements IAircraftVehicle {
  startRoute(): void {
    this.checkWind()
    this.getCargo()
    console.log('Hélices ligadas, iniciando vôo')
  }
  getCargo(): void {
    console.log('Camêra ligada, estamos prontos!')
  }
  checkWind(): void {
    console.log('Ventos a 5km/h')
  }
}

class LimeTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Scooters()
  }
  createTransportAircraft(): IAircraftVehicle {
    return new Drones()
  }
}

/**
 * Client implementation
 */
class Client {
  private vehicle: ILandVehicle
  private aircraft: IAircraftVehicle

  constructor(factory: ITransportFactory) {
    this.vehicle = factory.createTransportVehicle()
    this.aircraft = factory.createTransportAircraft()
  }

  startRoute() {
    this.vehicle.startRoute()
    this.aircraft.startRoute()
  }
}

enum TypesOfTransport {
  UBER,
  NINE,
  LIME
}

function main() {

  const currentCompany = TypesOfTransport.LIME
  let transport: ITransportFactory

  try {

    if (currentCompany === TypesOfTransport.NINE) {
      transport = new NineNineTransport()
    } else if (currentCompany === TypesOfTransport.UBER) {
      transport = new UberTransport()
    } else if (currentCompany === TypesOfTransport.LIME) {
      transport = new LimeTransport()
    } else {
      throw new Error("Tipo de transporte inávlido");
    }
    
    const client = new Client(transport)
    client.startRoute()
    
  } catch (error) {
    console.error(error.message)
  }

}

main()