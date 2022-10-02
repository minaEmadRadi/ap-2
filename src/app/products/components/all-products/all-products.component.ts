import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  //inject service
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts() {
    this.service.getAllProducts().subscribe((res: any) => { this.products = res; console.log(res) },
      error => {
        alert('error');
      })
  }

}
