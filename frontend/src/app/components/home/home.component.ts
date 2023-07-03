import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public authService: AuthService) {}
  // loggedIn = false;
  // constructor(private http:HttpClient) {

  // }
  
  // ngOnInit() {
  //   this.loggedIn = localStorage.getItem('token') !== null;
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${localStorage.getItem('token')}`
  //   });

  //   this.http.get('http://localhost:8000/api/user', {headers: headers}).subscribe(
  //     result => console.log(result) 
  //   )
  // }

  
  
}
