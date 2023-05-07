import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://localhost:44379/api/auth";

  constructor(private httpClient: HttpClient) { }

  login(loginModel: LoginModel) : Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "/login", loginModel);
  }

  isAuthenticated(){
    if(window.localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
