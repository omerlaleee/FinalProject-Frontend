import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44379/api/products";

  getProducts(): Observable<ListResponseModel<Product>> {
    let getAllUrl = this.apiUrl + "/getall";
    return this.httpClient.get<ListResponseModel<Product>>(getAllUrl);
  }

  getProductsByCategoryId(categoryId: number): Observable<ListResponseModel<Product>> {
    let getProductsByCategoryIdUrl = this.apiUrl + "/getbycategoryid?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(getProductsByCategoryIdUrl);
  }

  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "/add", product);
  }
}