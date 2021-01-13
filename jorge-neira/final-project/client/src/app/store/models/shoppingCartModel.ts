export interface CartProducts {
  id: string;
  quantity: number;
  price: number;
  'price-float': number;
  image: string;
  name: string;
  'product-status': boolean;
}

export interface ShoppingCartModel {
  nbtotalproducts: number;
  price: number;
  'price-float': number;
  'shipping-price': number;
  products: CartProducts[],
}
