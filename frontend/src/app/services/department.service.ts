import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _httpClient:HttpClient) {}

    getDepartments():Observable<any>{

      return  this._httpClient.get('http://localhost:8000/api/departments');

     }

}
