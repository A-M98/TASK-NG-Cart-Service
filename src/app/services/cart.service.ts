import { Injectable } from '@angular/core';
import { Product } from '../../data/products';
export interface CartItem {
  product: Product;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];
  cartItems: CartItem[] = [];
  quantity: number = 0;
  constructor() {}

  addToCart(product: Product) {
    const existingProduct = this.products.find((p) => p.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.products.push({ ...product, quantity: 1 });
    }
  }

  getCart() {
    return this.products;
  }

  removeFromCart(product: Product) {
    if (product) {
      const existingProduct = this.products.find((p) => p.id === product.id);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        this.products = this.products.filter((p) => p.id !== product.id);
      }
    }
  }
}
