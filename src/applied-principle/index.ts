import { Payment } from "./class/Payment";

export class AppliedPrinciple {

  public static main(): void {
    
    const payment = new Payment()
    payment.pay(200)
  }

}
