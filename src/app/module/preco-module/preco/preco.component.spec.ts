import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoComponent } from './preco.component';

describe('PrecoComponent', () => {
  let component: PrecoComponent;
  let fixture: ComponentFixture<PrecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrecoComponent]
    });
    fixture = TestBed.createComponent(PrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
