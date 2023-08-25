import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Estoque } from 'src/app/model/estoque';
import { EstoqueResponse } from 'src/app/model/response/estoqueResponse';
import { EstoqueService } from 'src/app/services/estoque.service';

export interface PeriodicElement {
  codigo: number;
  nome: string;
  qtd_estoque: number;
  compra: number;
  venda: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {codigo: 1, nome:"Vinho", qtd_estoque: 15, compra: 10, venda: 20},
  {codigo: 2, nome:"Cerveja",qtd_estoque: 25, compra: 11, venda: 21},
  {codigo: 3, nome:"Pinga",qtd_estoque: 35, compra: 12, venda: 22},
  {codigo: 4, nome:"Cachaça",qtd_estoque: 45, compra: 13, venda: 23},
  {codigo: 5, nome:"Jurubeba",qtd_estoque: 55, compra: 14, venda: 24},
  {codigo: 6, nome:"Bebida 51",qtd_estoque: 65, compra: 15, venda: 25},
  {codigo: 7, nome:"Coca-Cola",qtd_estoque: 75, compra: 16, venda: 26}
];


@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit , AfterViewInit  {

  displayedColumns: string[] = ['Codigo','Nome', 'Quantidade', 'Compra', 'Ação'];

  estoque : Estoque[]=[];
  dataSource = new MatTableDataSource(this.estoque);

  constructor(private estoqueService:EstoqueService,private router:Router){    
}
  ngOnInit(): void {
    this.estoqueService.Obter().subscribe(x =>{
      this.ObterEstoque(x);
      this.dataSource.data = this.estoque;
    })
  }

  ObterEstoque(estoqueResponse : EstoqueResponse[]){
    estoqueResponse.forEach(x =>{

      let estoque = new Estoque();
      estoque.codigo = x.codigo;
      estoque.nome = x.nome;
      estoque.quantidade = x.quantidade
      estoque.compra = x.compra;
      this.estoque.push(estoque);
    })
  }


  @ViewChild(MatPaginator) paginator: any ;
  @ViewChild(MatSort) sort: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.paginator.MatPaginatorIntl = new MatPaginatorIntl();
    this.paginator.MatPaginatorIntl.itemsPerPageLabel = "Items por Tela";
  }

  Filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  Editar(codigo:number){
    this.router.navigate([`dashboard/cadastro-produto/${codigo}`]);   
  }

}
