import { IDbProduct } from '../interface/IDbProduct'

export class MySQLProduct implements IDbProduct {
  
  getProductById(productId: number): string {
    return `MYSQL: Exibindo dados do produto ${productId}`
  }

}
