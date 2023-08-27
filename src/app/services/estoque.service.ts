import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoSignature } from '../model/signature/produtoSignature';
import { Observable, delay, tap } from 'rxjs';
import { EstoqueResponse } from '../model/response/estoqueResponse';
import { LoaderService } from '../emitter/loader.service';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  private url : string = "http://localhost:3000/estoque"

  constructor(private httpClient : HttpClient) { }

  Obter() : Observable<EstoqueResponse[]>{
    return this.httpClient.get<EstoqueResponse[]>(this.url)
  }

  ObterPorCodigo(codigo : number) : Observable<EstoqueResponse[]>{
      let parametros = `${this.url}?id=${codigo}`;
     return this.httpClient.get<EstoqueResponse[]>(parametros);
  }

  Atualizar(produtoSignature:ProdutoSignature){   
    let parametros = `${this.url}/${produtoSignature.id}`;
    return this.httpClient.put<ProdutoSignature>(parametros,produtoSignature)
  }

  Incluir(produtoSignature:ProdutoSignature) : Observable<any>{   
  return this.httpClient.post<any>(this.url,produtoSignature)
  }
}
