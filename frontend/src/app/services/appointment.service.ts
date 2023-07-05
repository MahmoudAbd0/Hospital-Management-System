import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private _httpClinet:HttpClient) { }
  getAppointments():Observable<any>{
    return  this._httpClinet.get('http://127.0.0.1:8000/api/appointments');
   }
  
}
