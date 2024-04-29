import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformationBeneficiaireComponent } from './addformation-beneficiaire.component';

describe('AddformationBeneficiaireComponent', () => {
  let component: AddformationBeneficiaireComponent;
  let fixture: ComponentFixture<AddformationBeneficiaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddformationBeneficiaireComponent]
    });
    fixture = TestBed.createComponent(AddformationBeneficiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
