import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product) {
    let itemToBeAdded = CartItems.find(c => c.product.productId === product.productId);
    if (itemToBeAdded) {
      itemToBeAdded.quantity++;
    }
    else {
      let cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;
      CartItems.push(cartItem);
    }
  }

  removeFromCart(product: Product) {
    let itemToBeRemoved: CartItem = CartItems.find(c => c.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(itemToBeRemoved), 1);
  }

  decreaseFromCart(product: Product){
    let itemToBeDecreased: CartItem = CartItems.find(c => c.product.productId === product.productId);
    itemToBeDecreased.quantity--;
  }

  increaseFromCart(product: Product){
    let itemToBeDecreased: CartItem = CartItems.find(c => c.product.productId === product.productId);
    itemToBeDecreased.quantity++;
  }

  list(): CartItem[] {
    return CartItems;
  }
}
