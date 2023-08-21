import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginSignature } from '../model/signature/loginSignature';
import { LoginResponse } from '../model/response/loginResponse';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url : string = "http://localhost:3000/login"

  constructor(private httpClient : HttpClient) { }

  Login(loginSignature:LoginSignature) : Observable<LoginResponse[]>{
   let parametros = `${this.url}?usuario=${loginSignature.usuario}&senha=${loginSignature.senha}`;
   /*Será utilizado apenas para desenvolvimento*/
  return this.httpClient.get<LoginResponse[]>(parametros).pipe(
    delay(2000)
  )
  }
}
