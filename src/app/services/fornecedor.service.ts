import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FornecedorSignature } from '../model/signature/fornecedorSignature';
import { Observable } from 'rxjs';
import { FornecedorResponse } from '../model/response/fornecedorResponse';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private url : string = "http://localhost:3000/fornecedor"

  constructor(private httpClient : HttpClient) { }

  Obter() : Observable<FornecedorResponse[]>{
    return this.httpClient.get<FornecedorResponse[]>(this.url)
  }

  ObterPorCodigo(codigo : number) : Observable<FornecedorResponse[]>{
    let parametros = `${this.url}?id=${codigo}`;
   return this.httpClient.get<FornecedorResponse[]>(parametros);
}

Atualizar(produtoSignature:FornecedorSignature){   
  let parametros = `${this.url}/${produtoSignature.id}`;
  return this.httpClient.put<FornecedorSignature>(parametros,produtoSignature)
}

  Incluir(fornecedorSignature:FornecedorSignature) : Observable<any>{   
  return this.httpClient.post<any>(this.url,fornecedorSignature)
  }
}
