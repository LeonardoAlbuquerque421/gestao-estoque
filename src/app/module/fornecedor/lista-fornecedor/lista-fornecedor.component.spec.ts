import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFornecedorComponent } from './lista-fornecedor.component';

describe('ListaFornecedorComponent', () => {
  let component: ListaFornecedorComponent;
  let fixture: ComponentFixture<ListaFornecedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaFornecedorComponent]
    });
    fixture = TestBed.createComponent(ListaFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
