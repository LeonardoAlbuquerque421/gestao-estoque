import { Fornecedor } from "./fornecedor";

export class Estoque {

    constructor(){
        this.fornecedor = new Fornecedor();
        this.codigo = 0;
        this.nome = "";
        this.quantidade = 0;
        this.compra = 0;
    }

    codigo : number;
    nome: string;
    quantidade : number;
    compra : number;
    fornecedor: Fornecedor
}