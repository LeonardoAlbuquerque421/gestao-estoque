import { Ramo } from "../ramo";

export class FornecedorResponse{

    constructor(){
        this.id = 0;
        this.razaoSocial = "";
        this.cnpj = 0;
        this.inscricaoEstadual = 0;
        this.ramoDeAtividade = new Ramo();
    }
    id: number;
    razaoSocial : string;
    cnpj:number;
    inscricaoEstadual:number;
    ramoDeAtividade: Ramo;
}