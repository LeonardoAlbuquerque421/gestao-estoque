import { Endereco } from "../endereco";
import { Ramo } from "../ramo";
import { Responsavel } from "../responsavel";

export class FornecedorSignature{
    razaoSocial : string;
    cnpj:number;
    inscricaoEstadual:number;
    ramoDeAtividade: Ramo;
    endereco: Endereco;
    responsavel:Responsavel;
    
}