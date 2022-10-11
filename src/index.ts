class Token {

  private _token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ZS_HLlphkua3PBVgnlnxtvjsxVayhc0CfWHZiy6WS68'

  get token(): string {
    return this._token
  }

}

interface IPayPalPayment {
  authToken(): Token
  payPalPayment(): void
  payPalReceive(): void
}

class PayPal implements IPayPalPayment {

  private _token: Token

  authToken(): Token {
    return new Token()
  }

  payPalPayment(): void {
    this._token = this.authToken()
    if (!this._token.token) {
      throw new Error('Unauthorized')
    }
    console.log('Enviando pagamentos via PayPal')
  }

  payPalReceive(): void {
    console.log('Recebendo pagamentos via PayPal')
  }

}


/**
 * Nova solicitação, agora os pagamento podem ser feitos
 * através do Payonner
 */
interface IPayonnerPayment {
  authToken(): Token
  sendPayment(): void
  receivePayment(): void
}

class Payonner implements IPayonnerPayment {

  private _token: Token

  authToken(): Token {
    return new Token()
  }
  sendPayment(): void {
    this._token = this.authToken()
    if (!this._token.token) {
      throw new Error('Unauthorized')
    }
    console.log('Enviando pagamentos via Payonner')
  }
  receivePayment(): void {
    console.log('Recebendo pagamentos via Payonner')
  }

}

/**
 * Adapter
 */
class PayonnerAdapter implements IPayPalPayment {

  constructor(private payonner: Payonner) {}

  authToken(): Token {
    return this.payonner.authToken()
  }

  payPalPayment(): void {
    return this.payonner.sendPayment()
  }

  payPalReceive(): void {
    return this.payonner.receivePayment()
  }

}

/**
 * Desafio Adapter MercadoPago
 */
interface IMercadoPago {
  authToken(): Token
  enviarPagamentos(): void
  receberPagamentos(): void
}

class MercadoPago implements IMercadoPago {

  private _token: Token

  authToken(): Token {
    return new Token()
  }
  enviarPagamentos(): void {
    this._token = this.authToken()
    if (!this._token.token) {
      throw new Error('Unauthorized')
    }
    console.log('Enviando pagamentos via Mercado Pago')
  }
  receberPagamentos(): void {
    console.log('Recebendo pagamentos via Mercado Pago')
  }

}

class MercadoPagoAdapter implements IPayPalPayment {

  constructor(private mercadoPago: MercadoPago) {}

  authToken(): Token {
    return this.mercadoPago.authToken()
  }
  payPalPayment(): void {
    return this.mercadoPago.enviarPagamentos()
  }
  payPalReceive(): void {
    return this.mercadoPago.receberPagamentos()
  }

}

function main() {

  let payment: IPayPalPayment

  payment = new PayPal()
  payment.payPalPayment()
  payment.payPalReceive()
  
  payment = new PayonnerAdapter(new Payonner())
  payment.payPalPayment()
  payment.payPalReceive()

  payment = new MercadoPagoAdapter(new MercadoPago())
  payment.payPalPayment()
  payment.payPalReceive()

}

main()