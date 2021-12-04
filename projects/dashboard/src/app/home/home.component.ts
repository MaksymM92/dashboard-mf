import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidenav")!.style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
  }

}
