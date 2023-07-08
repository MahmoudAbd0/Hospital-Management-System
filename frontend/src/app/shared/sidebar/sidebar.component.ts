import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor()
  {

  }
  showSideBar()
  {
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    navigation?.classList.toggle("active");
    main?.classList.toggle("active");
  }

  username = localStorage.getItem('name');
  loggedIn = false;
  adminLogged = false;
  drLogged = false;
  receptionistLogged = false;

  ngOnInit() {
    this.loggedIn = localStorage.getItem('token') !== null;
    this.adminLogged = localStorage.getItem('role') == '3';
    this.receptionistLogged = localStorage.getItem('role') == '2';
    this.drLogged = localStorage.getItem('role') == '1';

  }

  logout() {
    localStorage.removeItem('token')
  }
}
