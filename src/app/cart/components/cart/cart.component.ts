import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private service: CartService) { }
  cartProducts: any[] = [];
  total: number = 0;
  success: boolean = false
  ngOnInit(): void {
    this.getCartProducts()
  }


  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getCartTotal()
  }

  addAmount(index: number) {
    this.cartProducts[index].quantity++
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  minsAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--
      this.getCartTotal()
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }
  detectChange() {
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1)
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }

  clearCart() {
    this.cartProducts = []
    this.getCartTotal()
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  getCartTotal() {
    this.total = 0
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }

  addCart() {
    if (confirm("Are you sure to confirm this order ?")) {
      let products = this.cartProducts.map(item => {
        return { productId: item.item.id, quantity: item.quantity }
      })

      let Model = {
        userId: 5,
        date: new Date(),
        products: products
      }

      this.service.createNewCart(Model).subscribe(res => {
        this.success = true
      })

      console.log(Model)
      this.clearCart()
    }
  }



}
