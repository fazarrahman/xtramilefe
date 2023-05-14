import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddEditComponent } from './patient-add-edit.component';

describe('PatientAddEditComponent', () => {
  let component: PatientAddEditComponent;
  let fixture: ComponentFixture<PatientAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientAddEditComponent]
    });
    fixture = TestBed.createComponent(PatientAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
