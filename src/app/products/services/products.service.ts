import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }
  getAllProducts() {
    return this._http.get(environment.baseApi + 'products');
  } // get products from data.json
  getAllCategories() {
    return this._http.get(environment.baseApi + 'products/categories');
  } // get Categories from data.json
  getProductsByCategory(value: string) {
    return this._http.get(environment.baseApi + 'products/category/' + value);
  } // get Categories from data.json
}
