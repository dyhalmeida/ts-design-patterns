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
  NINE
}


function main() {

  const currentCompany = TypesOfTransport.UBER
  let transport: ITransportFactory

  try {

    if (currentCompany === TypesOfTransport.NINE) {
      transport = new NineNineTransport()
    } else if (currentCompany === TypesOfTransport.UBER) {
      transport = new UberTransport()
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