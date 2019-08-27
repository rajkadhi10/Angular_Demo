import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.scss']
})
export class MomentComponent implements OnInit {

  constructor() { 
     // add this 2 of 4
    
  }
 today = moment();

  ngOnInit() {
  }

}
