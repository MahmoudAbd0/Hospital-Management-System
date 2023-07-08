import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const data = {
      email,
      password
    };

    return this.http.post('http://localhost:8000/api/login', data);
  }
}
