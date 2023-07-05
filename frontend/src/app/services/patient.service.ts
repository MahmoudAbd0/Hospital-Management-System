import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private _httpClient:HttpClient) { }
  getPatients(): Observable<any>{
    return this._httpClient.get('http://127.0.0.1:8000/api/patients');
  }
  getPatientsByDoctor(id:any): Observable<any>{
    return this._httpClient.get(`http://localhost:8000/api/doctors/${id}/appointments`);
  }
}
