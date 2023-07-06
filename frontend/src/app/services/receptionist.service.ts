import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { receptionistModel } from '../models/doctors/receptionistModel';
@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private _httpClinet:HttpClient) { }
  getReceptionists():Observable<any>{
    return  this._httpClinet.get('http://127.0.0.1:8000/api/receptionists');
   }

   getReceptionist(id: number): Observable<receptionistModel> {
    return this._httpClinet.get<receptionistModel>(`${this.apiUrl}/receptionists/${id}`);
  }

  createReceptionist(data: receptionistModel): Observable<receptionistModel> {
    return this._httpClinet.post<receptionistModel>(`${this.apiUrl}/receptionists`, data);
  }

  updateReceptionist(data: receptionistModel): Observable<receptionistModel> {
    return this._httpClinet.put<receptionistModel>(`${this.apiUrl}/receptionists/${data.id}`, data);
  }

  deleteReceptionist(id: number): Observable<void> {
    return this._httpClinet.delete<void>(`${this.apiUrl}/receptionists/${id}`);
  }
}
