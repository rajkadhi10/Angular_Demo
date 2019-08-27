import { Component, OnInit } from '@angular/core';
import { NumberPipeComponent } from '../number-pipe/number-pipe.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  urls=[{ name:"NumberPipe",value:"numberpipe"},
        { name:"DatePipe",value:"moment"},
        { name:"CurrencyPipe",value:"currencypipe"},
        { name:"CRUD",value:"crud"}];
}
