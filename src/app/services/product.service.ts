import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44379/api/products/getall";

  getProducts() : Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
