import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBeneficiaireComponent } from './modal-beneficiaire.component';

describe('ModalBeneficiaireComponent', () => {
  let component: ModalBeneficiaireComponent;
  let fixture: ComponentFixture<ModalBeneficiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBeneficiaireComponent]
    });
    fixture = TestBed.createComponent(ModalBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
