import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private _httpClinet:HttpClient) { }
  getdoctors():Observable<any>{
    return  this._httpClinet.get('http://127.0.0.1:8000/api/doctors');
   }
}
