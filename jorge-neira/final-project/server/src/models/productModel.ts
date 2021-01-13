import { model, Schema } from 'mongoose';
import IProduct from '../../types/models/productModelType';

const productSchema = new Schema({
  name: { type: String, required: true },
  reference: { type: String, required: true },
  'part-number': { type: String },
  ean: { type: Number },
  price: { type: Number, required: true },
  sales: { type: Number },
  category: { type: String },
  'sub-category': { type: String },
  stock: { type: Number, required: true },
  'product-status': { type: Boolean },
  manufacture: { type: String },
  images: { type: [String] },
  'general-specs': { type: [String] },
  shortDescription: { type: String },
  generalDescription: { type: [Object] },
});

export default model<IProduct>('Product', productSchema, 'products', true);
