import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachinghistoryComponent } from './teachinghistory.component';

describe('TeachinghistoryComponent', () => {
  let component: TeachinghistoryComponent;
  let fixture: ComponentFixture<TeachinghistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeachinghistoryComponent]
    });
    fixture = TestBed.createComponent(TeachinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
