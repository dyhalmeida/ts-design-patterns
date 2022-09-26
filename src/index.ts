import { CreditCard } from './class/CreditCard'
import { DebitCard } from './class/DebitCard'
import { Rewards } from './class/Rewards'

// const card = new CreditCard()
// const card = new DebitCard()

/** Aqui com Rewards, foi feito a substituição da classe derivada (CreditCard e DebitCard) pela classe ou
* que implementa a mesma interface da classe base (Card)
*/
const card = new Rewards()

card.validate()
card.pay()