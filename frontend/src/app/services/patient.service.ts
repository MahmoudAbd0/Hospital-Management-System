import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patientModel } from '../models/doctors/patientModel.model';
import { NewPatientInterface } from '../interfaces/new-patient-interface';


@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://127.0.0.1:8000/api'

  constructor(private _httpClient:HttpClient) { }
  getPatients(): Observable<any>{
    return this._httpClient.get('http://127.0.0.1:8000/api/patients');
  }
  getPatientsByDoctor(id:any): Observable<any>{
    return this._httpClient.get(`http://localhost:8000/api/doctors/${id}/appointments`);
  }


  // createPatient(data: patientModel): Observable<patientModel> {

  createPatient(data: NewPatientInterface): Observable<patientModel> {

    return this._httpClient.post<patientModel>(`${this.apiUrl}/patients`, data);
  }

  updatePatient(data: patientModel): Observable<patientModel> {
    return this._httpClient.put<patientModel>(`${this.apiUrl}/patients/${data.id}`, data);
  }

  deletePatient(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this.apiUrl}/patients/${id}`);
  }
}
