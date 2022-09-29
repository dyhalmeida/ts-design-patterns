import { IDbProduct } from '../interface/IDbProduct'

export class PostegreSQLProduct implements IDbProduct {
  
  getProductById(productId: number): string {
    return `POSTGRESQL: Exibindo dados do produto ${productId}`
  }

}
