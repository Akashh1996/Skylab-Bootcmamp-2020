import { Document } from 'mongoose';

interface ProductModel {
  name: string;
  reference: string;
  'part-number'?: string;
  ean?: number;
  price: number;
  sales: number;
  stock: number;
  'product-status': boolean;
  category: string;
  'sub-category': string;
  manufacture: string;
  images?: Array<string>;
  'general-specs'?: Array<string>;
  shortDescription?: string;
  generalDescription?: Array<object>;
}

interface IProduct extends ProductModel, Document {}

export default IProduct;
