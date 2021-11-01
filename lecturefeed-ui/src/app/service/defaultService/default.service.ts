import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  protected IS_DEBUG = true

  constructor(protected http: HttpClient) { }

  protected getAPIUrl(): String{
    if(this.IS_DEBUG){
      return location.origin.replace("4200", "8080")+"/";
    }
    return location.origin+"/";
  }

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


}
