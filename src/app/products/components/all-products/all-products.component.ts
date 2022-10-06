import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  cartProduct: any[] = [];
  //inject service
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getproducts();
    this.getcategories();
  }

  getproducts() {
    this.service.getAllProducts().subscribe((res: any) => { this.products = res; console.log(res) },
      error => {
        alert(error.message);
      })
  }

  getcategories() {
    this.service.getAllCategories().subscribe((res: any) => { this.categories = res; console.log(res) },
      error => {
        alert(error.message);
      })
  }
  getProductsCategory(value: string) {
    this.service.getProductsByCategory(value).subscribe((res: any) => { this.products = res; console.log(res) },
      error => {
        alert(error.message);
      })

  }

  recievCategory(event: any) {
    let value = event.target.value;
    (value == "all") ? this.getproducts() : this.getProductsCategory(value)

  }

  addToCart(event: any) {
    if ("cart" in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem("cart")!);//رجعه زي ما هو
      let exist = this.cartProduct.find(x => x.item.id == event.item.id)
      if (exist)
        alert("exist")
      else {
        this.cartProduct.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cartProduct))// ابعته زي ما هو
      }
    } else {
      this.cartProduct.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    }

  }
















  /** */
  isShow: boolean | undefined;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  /** */

}
