import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from 'src/app/emitter/modal.service';
import { Estoque } from 'src/app/model/estoque';
import { Fornecedor } from 'src/app/model/fornecedor';
import { EstoqueResponse } from 'src/app/model/response/estoqueResponse';
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

  titulo:string ="";
  editar : boolean = false;
  carregamento : boolean = true;

  estoque = new EstoqueResponse();
  codigoProduto : any;
  formProduto:any;
  fornecedores:Fornecedor[]=[]

  constructor(private router:Router , 
    private estoqueService:EstoqueService, 
    private fornecedorService:FornecedorService,
    private modalService:ModalService,
    private activatedRoute: ActivatedRoute
    ){

    this.formProduto = new FormGroup({
      codigo : new FormControl('',Validators.required),
      nome : new FormControl('',Validators.required),
      fornecedor : new FormControl(''),
      quantidade : new FormControl('',[Validators.required]),
      compra : new FormControl('',[Validators.required,Validators.min(0)])
    })
  }
  ngOnInit(): void {

    this.fornecedorService.Obter().subscribe(x => {
      this.ObterFornecedores(x);
    })   
    this.TelaEditar();
  }

  TelaEditar(){
    this.activatedRoute.paramMap.subscribe(params =>{
      this.codigoProduto = params.get('codigo');
      if(this.codigoProduto > 0){
      this.estoqueService.ObterPorCodigo(this.codigoProduto).subscribe(estoque => {   
        let editar = this.ObterProduto(estoque);     
        this.SetarFormulario(editar);
        this.ParametrosTela(true);
        })
      }else{
        this.ParametrosTela(false);
      }      
    })  
  }

  ParametrosTela(editar : boolean){
    if(editar){
      this.editar = true;
      this.titulo = "Editar Produto"  
    }
    else{
      this.titulo = "Cadastrar Produto"
    }
    this.carregamento = false;
  }

  ObterProduto(estoqueResponse:EstoqueResponse[]) : Estoque{

    let estoque = new Estoque();
    estoque.codigo = estoqueResponse[0].codigo
    estoque.compra = estoqueResponse[0].compra
    estoque.quantidade = estoqueResponse[0].quantidade
    estoque.nome = estoqueResponse[0].nome
    estoque.fornecedor.id = estoqueResponse[0].fornecedor
    return estoque;
  }

  SetarFormulario(estoque : Estoque){
    this.formProduto.get('codigo').setValue(estoque.codigo);
    this.formProduto.get('nome').setValue(estoque.nome);
    this.formProduto.get('fornecedor').setValue(estoque.fornecedor.id);
    this.formProduto.get('quantidade').setValue(estoque.quantidade);
    this.formProduto.get('compra').setValue(estoque.compra);
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

    if(this.editar){
      produtoSignature.id = this.codigoProduto;
      this.estoqueService.Atualizar(produtoSignature).subscribe(retorno =>{
        this.modalService.AbrirModal(`Produto ${retorno.nome} atualizado`)      
        this.router.navigate(['/dashboard/estoque']);
      })

    }else{
      this.estoqueService.Incluir(produtoSignature).subscribe(retorno =>{
        this.modalService.AbrirModal(`Produto ${retorno.nome} incluido no estoque`)      
        this.router.navigate(['/dashboard/estoque']);
      })
    }
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

  get formattedValue(): string {
    return (this.formProduto.get('compra').value / 100).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  onInput(inputElement: any) {
    const value = inputElement.value;
    // Remove caracteres não numéricos
    const numericValue = parseFloat(value!.replace(/\D/g, '')) || 0;

    // Atualiza o valor numérico
    this.formProduto.get('compra').setValue(numericValue);
  }
}
