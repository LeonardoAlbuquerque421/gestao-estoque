import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoSignature } from '../model/signature/produtoSignature';
import { Observable, delay } from 'rxjs';
import { EstoqueResponse } from '../model/response/estoqueResponse';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private url : string = "http://localhost:3000/estoque"

  constructor(private httpClient : HttpClient) { }

  Obter() : Observable<EstoqueResponse[]>{
    return this.httpClient.get<EstoqueResponse[]>(this.url)
  }


  Incluir(produtoSignature:ProdutoSignature) : Observable<any>{   
  return this.httpClient.post<any>(this.url,produtoSignature)
  }
}
