export interface IPaymentInstruments {
  validate(): void
  pay(): void
}