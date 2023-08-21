import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/emitter/modal.service';
import { ProdutoSignature } from 'src/app/model/signature/produtoSignature';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.scss']
})
export class AdicionarProdutoComponent {

  formProduto:any;

  constructor(private router:Router , 
    private estoqueService:EstoqueService, 
    private modalService:ModalService
    ){

    this.formProduto = new FormGroup({
      codigo : new FormControl('',Validators.required),
      nome : new FormControl('',Validators.required),
      fornecedor : new FormControl("1"),
      quantidade : new FormControl(0),
      compra : new FormControl('',Validators.required),
      venda : new FormControl('',Validators.required)
    })
  }

  IncluirProduto(){
    let produtoSignature = new ProdutoSignature();
    produtoSignature.codigo = this.codigo;
    produtoSignature.nome = this.nome;
    produtoSignature.fornecedor = this.fornecedor;
    produtoSignature.quantidade = this.quantidade;
    produtoSignature.compra = this.compra;
    produtoSignature.venda = this.venda;

    this.estoqueService.Incluir(produtoSignature).subscribe(retorno =>{
      this.modalService.AbrirModal(`Produto ${retorno.nome} incluino no estoque`)      
      this.router.navigate(['/dashboard/estoque']);
    })
  }

  Voltar(){
    this.router.navigate(['/dashboard/estoque']);
  }

  get codigo() { 
    return this.formProduto.get('codigo').value; 
  }   
   get nome() { 
    return this.formProduto.get('nome').value; 
   }
   get fornecedor() { 
    return this.formProduto.get('fornecedor').value; 
  }   
   get quantidade() { 
    return this.formProduto.get('quantidade').value; 
   }
   get compra() { 
    return this.formProduto.get('compra').value; 
  }   
   get venda() { 
    return this.formProduto.get('venda').value; 
   }

}
