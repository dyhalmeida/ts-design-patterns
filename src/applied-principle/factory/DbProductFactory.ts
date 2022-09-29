import { MySQLProduct } from '../class/MySQLProduct';
import { PostegreSQLProduct } from '../class/PostegreSQLProduct';
import { DbType } from '../enum/DbType'
import { IDbProduct } from '../interface/IDbProduct';

export class DbProductFactory {

  public static dbType: DbType = DbType.POSTGRESQL


  public static create(): IDbProduct {

    if (DbProductFactory.dbType === DbType.MYSQL) {
      return new MySQLProduct()
    } 
    
    if (DbProductFactory.dbType === DbType.POSTGRESQL) {
      return new PostegreSQLProduct()
    }

    return new MySQLProduct()

  }

}