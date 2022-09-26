import { Card } from "./Card";

export class DebitCard extends Card {
  validate(): void {
      console.log('Verificando se há saldo suficiente')
  }
}