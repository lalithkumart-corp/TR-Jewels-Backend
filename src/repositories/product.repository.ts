import {DefaultCrudRepository} from '@loopback/repository';
import {Product, ProductRelations} from '../models';
import {TrjewelsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {
  constructor(
    @inject('datasources.trjewels') dataSource: TrjewelsDataSource,
  ) {
    super(Product, dataSource);
  }
}
