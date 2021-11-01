import { Injectable } from '@angular/core';
import {DefaultService} from "../defaultService/default.service";
import {Token} from "../../model/Token";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends DefaultService{

  getAdminToken(){
    return this.http.get<Token>(this.getAPIUrl()+"auth/admin");
  }

}
