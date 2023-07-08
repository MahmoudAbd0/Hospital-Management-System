import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private _httpClient:HttpClient) { }
  getAppointments():Observable<any>{
    return  this._httpClient.get('http://127.0.0.1:8000/api/appointments');
   }
   getAppointmentsByDoctor(id:any):Observable<any>{
    return this._httpClient.get(`http://localhost:8000/api/doctors/${id}/appointments`);

   }

}
