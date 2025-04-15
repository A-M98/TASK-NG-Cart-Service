import { Component } from '@angular/core';
import { Product } from '../../../data/products';
import { CartService } from '../../services/cart.service';
import { JsonPipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgForOf, JsonPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  products: Product[] = [];

  constructor(private cartService: CartService) {
    this.getCart();
  }

  getCart() {
    this.products = this.cartService.getCart();
  }

  trackById(index: number, item: Product): number {
    return item.id;
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.getCart();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
