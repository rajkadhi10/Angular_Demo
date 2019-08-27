import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }
  apptitle = 'Raj App'

  ngOnInit() {
  }
  urls = [{ name: "Home", value: "" },
  { name: "About", value: "about" },
  { name: "Contact", value: "contact1" }, { name: "Logout", value: "login" }];

}
