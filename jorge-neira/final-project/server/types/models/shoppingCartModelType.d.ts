import { Document } from 'mongoose';

export interface CartProducts {
  id: string;
  quantity: number;
  price: number;
  'price-float': number;
  image: string;
  name: string;
  'product-status': boolean;
}

interface ShoppingCartModel {
  nbtotalproducts: number;
  price: number;
  'price-float': number;
  'shipping-price': number;
  products: CartProducts[],
  createAt: number;
}

interface IShoppingCart extends ShoppingCartModel, Document {}

export default IShoppingCart;
