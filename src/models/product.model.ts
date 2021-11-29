import {Model, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Product extends Model {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  metaTitle?: string;

  @property({
    type: 'string',
  })
  slug?: string;

  @property({
    type: 'string',
  })
  summary?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
