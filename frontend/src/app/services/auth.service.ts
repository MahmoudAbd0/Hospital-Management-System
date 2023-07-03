import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() {
    this.loggedIn = localStorage.getItem('token') !== null;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}