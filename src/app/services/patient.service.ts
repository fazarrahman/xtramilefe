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

  getPatientList(): Observable<any> {
    return this._http.get("http://localhost:8080/api/v1/patient");
  }
}
