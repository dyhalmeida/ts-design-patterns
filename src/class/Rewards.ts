import { IPaymentInstruments } from "../interface/IPaymentInstruments";

export class Rewards implements IPaymentInstruments {
  validate(): void {
    console.log('Verificando se há pontos suficientes')
  }
  pay(): void {
    console.log('Pagamento realizado com pontos')
  }

}