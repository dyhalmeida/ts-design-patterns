import { MySQLProduct } from "./MySQLProduct"

export class Payment {

  pay(productId: number): void {

    /**
     * Aqui, neste ponto, estamos violando o DIP, pois
     * nosso módulo Payment de alto nível está dependendo
     * de outro módulo de baixo nível MySQLProduct, quando
     * deveria depender de abstrações
     */
    const dbProduct = new MySQLProduct()
    const product = dbProduct.getProductById(productId)
    console.log(product)

  }
}
