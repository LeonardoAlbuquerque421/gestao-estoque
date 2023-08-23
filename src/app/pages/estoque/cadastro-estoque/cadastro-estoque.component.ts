import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/emitter/modal.service';
import { Fornecedor } from 'src/app/model/fornecedor';
import { FornecedorResponse } from 'src/app/model/response/fornecedorResponse';
import { ProdutoSignature } from 'src/app/model/signature/produtoSignature';
import { EstoqueService } from 'src/app/services/estoque.service';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-cadastro-estoque',
  templateUrl: './cadastro-estoque.component.html',
  styleUrls: ['./cadastro-estoque.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {

  formProduto:any;
  fornecedores:Fornecedor[]=[]

  constructor(private router:Router , 
    private estoqueService:EstoqueService, 
    private fornecedorService:FornecedorService,
    private modalService:ModalService
    ){

    this.formProduto = new FormGroup({
      codigo : new FormControl('',Validators.required),
      nome : new FormControl('',Validators.required),
      fornecedor : new FormControl(''),
      quantidade : new FormControl('',[Validators.required]),
      compra : new FormControl('',[Validators.required,Validators.min(0),Validators.max(9999)])
    })
  }
  ngOnInit(): void {
    this.fornecedorService.Obter().subscribe(x => {
      this.ObterFornecedores(x);
    })
  }

  ObterFornecedores(fornecedorResponse : FornecedorResponse[]){
    fornecedorResponse.forEach(x =>{

      let fornecedor = new Fornecedor;
      fornecedor.id = x.id;
      fornecedor.razaoSocial = x.razaoSocial;      
      this.fornecedores.push(fornecedor);
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
