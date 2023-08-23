import { Ramo } from "../ramo";

export class FornecedorResponse{

    constructor(){
        this.razaoSocial = "";
        this.cnpj = 0;
        this.inscricaoEstadual = 0;
        this.ramoDeAtividade = new Ramo();
    }

    razaoSocial : string;
    cnpj:number;
    inscricaoEstadual:number;
    ramoDeAtividade: Ramo;
}