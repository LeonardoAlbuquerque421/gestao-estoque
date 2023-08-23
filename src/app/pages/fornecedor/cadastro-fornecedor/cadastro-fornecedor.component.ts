import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/emitter/modal.service';
import { Endereco } from 'src/app/model/endereco';
import { Fornecedor } from 'src/app/model/fornecedor';
import { Responsavel } from 'src/app/model/responsavel';
import { FornecedorSignature } from 'src/app/model/signature/fornecedorSignature';
import { FornecedorService } from 'src/app/services/fornecedor.service';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.scss']
})
export class CadastroFornecedorComponent {

  formularioFornecedor:any;
  fornecedorSignature : FornecedorSignature;

  constructor(private router:Router, private fornecedorService : FornecedorService , private modalService : ModalService){

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

  Incluir(){
    this.fornecedorSignature = this.ObterFornecedor();
    console.log(this.fornecedorSignature);
    this.fornecedorService.Incluir(this.fornecedorSignature).subscribe(x => {
      this.modalService.AbrirModal("Fornecedor incluido com sucesso")      
      this.router.navigate(['/dashboard/fornecedor']);
    })
  }

  ObterFornecedor(): Fornecedor{
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
    this.router.navigate(['/dashboard/fornecedor']);
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
