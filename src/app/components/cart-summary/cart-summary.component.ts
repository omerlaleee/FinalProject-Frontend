import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.toastrService.error("Sepetten Silindi!", product.productName);
  }

  decreaseFromCart(product: Product) {
    this.cartService.decreaseFromCart(product);
    if (this.cartService.getQuantityOfItem(product) == 0) {
      this.cartService.removeFromCart(product);
      this.toastrService.error("Sepetten Silindi!", product.productName);
    }
    else {
      this.toastrService.warning("Ürün Miktarı Azaltıldı!", product.productName);
    }
  }

  increaseFromCart(product: Product) {
    this.cartService.increaseFromCart(product);
    this.toastrService.info("Ürün Miktarı Arttırıldı!", product.productName);
  }
}
