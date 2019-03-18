import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
httpOptions;
  constructor(private http:HttpClient) { }

  public postAccount(obj):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return  this.http.post("http://162.241.222.49:8484/secured-rest-api/accounts/",obj,this.httpOptions);
  }

  public verifyOTP(obj):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'text/plain'
      })
    }
    return  this.http.post("http://162.241.222.49:8484/secured-rest-api/otp-verify/",obj,this.httpOptions);
 
  }

  public updatePassword(obj):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'text/plain'
      })
    }
    return  this.http.post("http://162.241.222.49:8484/secured-rest-api/pass-update/",obj,this.httpOptions);
 
  }


}
