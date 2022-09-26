import { Card } from "./Card";

export class CreditCard extends Card {
  validate(): void {
      console.log('Verificando se há crédito suficiente')
  }
}