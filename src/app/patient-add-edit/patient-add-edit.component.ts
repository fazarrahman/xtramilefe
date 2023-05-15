import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patient-add-edit',
  templateUrl: './patient-add-edit.component.html',
  styleUrls: ['./patient-add-edit.component.css']
})
export class PatientAddEditComponent implements OnInit {
  patientForm: FormGroup;

  constructor(private _fb: FormBuilder, 
    private _patientService: PatientService, 
    private _dialogRef: MatDialogRef<PatientAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.patientForm = this._fb.group({
      firstName: '',
      lastName: '',
      gender: '',
      phoneNo: '',
      dateOfBirth: ''
    });
  }

  ngOnInit(): void {
    this.patientForm.patchValue(this.data)
  }

  onFormSubmit() {
    if(this.patientForm.valid) {
      if(this.data) {
        this._patientService.updatePatient(this.data.pid, this.patientForm.value).subscribe({
          next: (val: any) => {
            alert("Patient updated sucessfully");
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else {
        this._patientService.addPatient(this.patientForm.value).subscribe({
          next: (val: any) => {
            alert("Patient added sucessfully");
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    }
  }
}
