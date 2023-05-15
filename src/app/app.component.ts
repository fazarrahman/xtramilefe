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
  displayedColumns: string[] = ['pid', 'firstName', 'lastName', 'gender', 'phoneNo', 'dateOfBirth', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _dialog: MatDialog, private _patientService: PatientService) {}
  
  ngOnInit(): void {
    this.getPatientList();
  }

  openAddEditPatientForm() {
    const dialogRef = this._dialog.open(PatientAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPatientList();
        }
      }
    })
  }
  
  getPatientList() {
    this._patientService.getPatientList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePatient(pid: number) {
    this._patientService.deletePatient(pid).subscribe({
      next: () => {
        alert("Patient deleted !");
        this.getPatientList();
      },
      error: console.log,
    });
  }

  openEditPatientForm(data: any) {
    const dialogRef = this._dialog.open(PatientAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPatientList();
        }
      },
    });
  }
}
