import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

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
}
