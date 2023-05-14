import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientAddEditComponent } from './patient-add-edit/patient-add-edit.component';
import { PatientService } from './services/patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'xtramile app';

  constructor(private _dialog: MatDialog, private _patientService: PatientService) {}
  
  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditPatientForm() {
    this._dialog.open(PatientAddEditComponent);
  }
  
  getEmployeeList() {
    this._patientService.getPatientList().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: console.log,
    });
  }
}
