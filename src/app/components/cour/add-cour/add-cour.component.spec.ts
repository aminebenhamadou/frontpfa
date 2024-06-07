import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourComponent } from './add-cour.component';

describe('AddCourComponent', () => {
  let component: AddCourComponent;
  let fixture: ComponentFixture<AddCourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCourComponent]
    });
    fixture = TestBed.createComponent(AddCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
