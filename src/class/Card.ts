import { IPaymentInstruments } from "../interface/IPaymentInstruments";

export abstract class Card implements IPaymentInstruments {
  validate(): void {
    console.log('Validação de pagamento')
  }
  pay(): void {
    console.log('Pagamento realizado')
  }

}