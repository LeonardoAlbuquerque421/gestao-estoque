import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/emitter/modal.service';
import { ProdutoSignature } from 'src/app/model/signature/produtoSignature';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.scss']
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
      quantidade : new FormControl('',[Validators.required]),
      compra : new FormControl('',[Validators.required,Validators.min(0),Validators.max(9999)])
    })
  }

  IncluirProduto(){
    let produtoSignature = new ProdutoSignature();
    produtoSignature.codigo = this.codigo;
    produtoSignature.nome = this.nome;
    produtoSignature.fornecedor = this.fornecedor;
    produtoSignature.quantidade = this.quantidade;
    produtoSignature.compra = this.compra;

    this.estoqueService.Incluir(produtoSignature).subscribe(retorno =>{
      this.modalService.AbrirModal(`Produto ${retorno.nome} incluido no estoque`)      
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
}
