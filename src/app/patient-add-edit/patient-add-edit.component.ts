import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-patient-add-edit',
  templateUrl: './patient-add-edit.component.html',
  styleUrls: ['./patient-add-edit.component.css']
})
export class PatientAddEditComponent {
  patientForm: FormGroup;

  constructor(private _fb: FormBuilder, 
    private _patientService: PatientService, 
    private _dialogRef: DialogRef<PatientAddEditComponent>) {
    this.patientForm = this._fb.group({
      firstName: '',
      lastName: '',
      gender: '',
      phoneNo: '',
      dateOfBirth: ''
    });
  }

  onFormSubmit() {
    if(this.patientForm.valid) {
      this._patientService.addPatient(this.patientForm.value).subscribe({
        next: (val: any) => {
          alert("Patient added sucessfully");
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }
}
