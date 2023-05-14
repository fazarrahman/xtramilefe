import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientAddEditComponent } from './patient-add-edit/patient-add-edit.component';
import { PatientService } from './services/patient.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'xtramile app';
  displayedColumns: string[] = ['pid', 'firstName', 'lastName', 'gender', 'phoneNo', 'dateOfBirth'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
}
