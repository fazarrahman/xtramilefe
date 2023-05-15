import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _http: HttpClient) {}

  addPatient(data: any): Observable<any> {
    return this._http.post("http://localhost:8080/api/v1/patient", data);
  }

  updatePatient(pid: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/api/v1/patient/${pid}`, data);
  }

  getPatientList(): Observable<any> {
    return this._http.get("http://localhost:8080/api/v1/patient");
  }

  deletePatient(pid: number): Observable<any> {
    return this._http.delete(`http://localhost:8080/api/v1/patient/${pid}`);
  }
}
