import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }
  getProducts() {
    return this._http.get('https://fakestoreapi.com/products');
  } // get products from data.json
}
