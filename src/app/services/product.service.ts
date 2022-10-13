import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44379/api/";

  getProducts(): Observable<ListResponseModel<Product>> {
    let getAllUrl = this.apiUrl + "products/getall";
    return this.httpClient.get<ListResponseModel<Product>>(getAllUrl);
  }

  getProductsByCategoryId(categoryId: number): Observable<ListResponseModel<Product>> {
    let getProductsByCategoryIdUrl = this.apiUrl + "products/getbycategoryid?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(getProductsByCategoryIdUrl);
  }
}