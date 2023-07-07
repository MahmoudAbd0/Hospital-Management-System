import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { doctorModel } from '../models/doctors/doctorModel.model';

import { doctorModel } from '../models/doctors/doctorModel.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private _httpClinet:HttpClient) { }
  getdoctors():Observable<any>{
    return  this._httpClinet.get('http://127.0.0.1:8000/api/doctors');
   }

   getDoctor(id: number): Observable<doctorModel> {
    return this._httpClinet.get<doctorModel>(`${this.apiUrl}/doctors/${id}`);
  }

  createDoctor(data: doctorModel): Observable<doctorModel> {
    return this._httpClinet.post<doctorModel>(`${this.apiUrl}/doctors`, data);
  }

  updateDoctor(data: doctorModel): Observable<doctorModel> {
    return this._httpClinet.put<doctorModel>(`${this.apiUrl}/doctors/${data.id}`, data);
  }

  deleteDoctor(id: number): Observable<void> {
    return this._httpClinet.delete<void>(`${this.apiUrl}/doctors/${id}`);
  }
}

