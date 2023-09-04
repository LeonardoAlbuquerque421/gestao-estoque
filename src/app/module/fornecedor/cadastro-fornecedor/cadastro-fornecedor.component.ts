import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from 'src/app/emitter/modal.service';
import { Endereco } from 'src/app/model/endereco';
import { Fornecedor } from 'src/app/model/fornecedor';
import { Responsavel } from 'src/app/model/responsavel';
import { FornecedorResponse } from 'src/app/model/response/fornecedorResponse';
import { FornecedorSignature } from 'src/app/model/signature/fornecedorSignature';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.scss']
})
export class CadastroFornecedorComponent {

  titulo :string = "";
  editar : boolean = false;
  id: any;
  formularioFornecedor:any;
  fornecedorSignature : FornecedorSignature;

  constructor(
              private activetedRoute : ActivatedRoute,
              private router:Router, 
              private fornecedorService : FornecedorService , 
              private modalService : ModalService){

    this.formularioFornecedor = new FormGroup({
      razaoSocial : new FormControl('',[Validators.required]),
      cnpj : new FormControl('',[Validators.required]),
      inscricaoEstadual : new FormControl('',[Validators.required]),
      ramoAtividade : new FormControl('',[Validators.required]),
      cep : new FormControl('',[Validators.required]),
      rua : new FormControl('',[Validators.required]),
      bairro : new FormControl('',[Validators.required]),
      cidade : new FormControl('',[Validators.required]),
      estado : new FormControl('',[Validators.required]),
      nome : new FormControl('',[Validators.required]),
      funcao : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email])
    })

  }
  ngOnInit(): void {
    this.activetedRoute.paramMap.subscribe(params =>{
      this.id = params.get('codigo');
      if(this.id > 0){
        this.fornecedorService.ObterPorCodigo(this.id).subscribe(x =>{
          let editar = this.ObterFornecedor(x)
          this.SetarFormulario(editar);
          this.ParametrosTela(true)
        })
      }
      else{
        this.ParametrosTela(false);
      }
    })
  }

  ParametrosTela(editar : boolean){
    if(editar){
      this.editar = true;
      this.titulo = "Editar Fornecedor"  
    }
    else{
      this.titulo = "Cadastrar Fornecedor"
    }
  }


  SetarFormulario(fornecedor : Fornecedor){
    this.formularioFornecedor.get('razaoSocial').setValue(fornecedor.razaoSocial);
    this.formularioFornecedor.get('cnpj').setValue(fornecedor.cnpj);
    this.formularioFornecedor.get('inscricaoEstadual').setValue(fornecedor.inscricaoEstadual);
    this.formularioFornecedor.get('ramoAtividade').setValue(fornecedor.ramoDeAtividade);
    this.formularioFornecedor.get('cep').setValue(fornecedor.endereco.cep);
    this.formularioFornecedor.get('rua').setValue(fornecedor.endereco.rua);
    this.formularioFornecedor.get('bairro').setValue(fornecedor.endereco.bairro);
    this.formularioFornecedor.get('cidade').setValue(fornecedor.endereco.cidade);
    this.formularioFornecedor.get('estado').setValue(fornecedor.endereco.estado);
    this.formularioFornecedor.get('nome').setValue(fornecedor.responsavel.nome);
    this.formularioFornecedor.get('funcao').setValue(fornecedor.responsavel.funcao);
    this.formularioFornecedor.get('email').setValue(fornecedor.responsavel.email);
  }


  Incluir(){
    this.fornecedorSignature = this.ObterFornecedores();
    if(this.editar){
      this.fornecedorSignature.id = this.id;
      this.fornecedorService.Atualizar(this.fornecedorSignature).subscribe(retorno =>{
        this.modalService.AbrirModal(`Produto ${this.fornecedorSignature.razaoSocial} foi atualizado`)      
        this.router.navigate(['/dashboard/fornecedor/listar']);
      })

    }else{
      this.fornecedorService.Incluir(this.fornecedorSignature).subscribe(x => {
        this.modalService.AbrirModal("Fornecedor incluido com sucesso")      
        this.router.navigate(['/dashboard/fornecedor/listar']);
      })
    }
  }

  ObterFornecedor(fornecedorResponse : FornecedorResponse[]):Fornecedor
  {
    let fornecedor = new Fornecedor();
    fornecedor.razaoSocial = fornecedorResponse[0].razaoSocial;
    fornecedor.cnpj = fornecedorResponse[0].cnpj;
    fornecedor.inscricaoEstadual = fornecedorResponse[0].inscricaoEstadual;
    fornecedor.ramoDeAtividade = fornecedorResponse[0].ramoDeAtividade;
    fornecedor.endereco = new Endereco();
    fornecedor.endereco.bairro = fornecedorResponse[0].endereco.bairro;
    fornecedor.endereco.cep = fornecedorResponse[0].endereco.cep;
    fornecedor.endereco.cidade = fornecedorResponse[0].endereco.cidade;
    fornecedor.endereco.estado = fornecedorResponse[0].endereco.estado;
    fornecedor.endereco.rua = fornecedorResponse[0].endereco.rua
    fornecedor.responsavel = new Responsavel();
    fornecedor.responsavel.email = fornecedorResponse[0].responsavel.email;
    fornecedor.responsavel.funcao = fornecedorResponse[0].responsavel.funcao;
    fornecedor.responsavel.nome = fornecedorResponse[0].responsavel.nome;
    return fornecedor;
  }


  ObterFornecedores(): Fornecedor{
    let fornecedor = new Fornecedor();
    fornecedor.razaoSocial = this.razaoSocial;
    fornecedor.cnpj = this.cnpj;
    fornecedor.inscricaoEstadual = this.inscricaoEstadual;
    fornecedor.ramoDeAtividade = this.ramoAtividade;
    let endereco = this.ObterEndereco();
    fornecedor.endereco = endereco;

    let responsavel = this.ObterResponsavel();
    fornecedor.responsavel = responsavel;
    
    return fornecedor;
  }


  ObterResponsavel(): Responsavel{
    let responsavel = new Responsavel();
    responsavel.email = this.email;
    responsavel.funcao = this.funcao;
    responsavel.nome = this.nome;
    return responsavel;
  }

  ObterEndereco() : Endereco{
    let endereco = new Endereco();
    endereco.bairro = this.bairro;
    endereco.cep = this.cep;
    endereco.cidade = this.cidade;
    endereco.estado = this.estado;
    endereco.rua = this.rua
    return endereco;
  }

  Voltar(){
    this.router.navigate(['/dashboard/fornecedor/listar']);
  }

  get razaoSocial() { 
    return this.formularioFornecedor.get('razaoSocial').value; 
  }   
  get cnpj() : any { 
    return this.formularioFornecedor.get('cnpj').value; 
  }   
  get inscricaoEstadual() : any { 
    return this.formularioFornecedor.get('inscricaoEstadual').value; 
  }   
  get ramoAtividade() : any { 
    return this.formularioFornecedor.get('ramoAtividade').value; 
  }   
  get cep() : any { 
    return this.formularioFornecedor.get('cep').value; 
  }   
  get rua() : any { 
    return this.formularioFornecedor.get('rua').value; 
  }   
  get bairro() : any { 
    return this.formularioFornecedor.get('bairro').value; 
  }   
  get cidade() : any { 
    return this.formularioFornecedor.get('cidade').value; 
  }   
  get estado() : any { 
    return this.formularioFornecedor.get('estado').value; 
  }   
  get nome() : any { 
    return this.formularioFornecedor.get('nome').value; 
  }   
  get funcao() : any { 
    return this.formularioFornecedor.get('funcao').value; 
  }   
  get email() : any { 
    return this.formularioFornecedor.get('email').value; 
  }   

}
