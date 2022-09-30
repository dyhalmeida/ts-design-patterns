import { Transport } from './class/transport'
import { CarTransport } from './class/car-transport'
import { MotocycleTransport } from './class/motocycle-transport'
import { BikeTransport } from './class/bike-transport'

let transport: Transport
const type = 'eats'

console.log(process.env.argv)

if (type.includes('uber')) {

  transport = new CarTransport()

} else if (type.includes('log')) {

  transport = new MotocycleTransport()

} else if (type.includes('eats')) {

  transport = new BikeTransport()

} else {
  throw new Error("Selecione um parâmetro de tipo de entrega: uber | log | eats");
}

if (transport) {
  transport.startTransport()
}