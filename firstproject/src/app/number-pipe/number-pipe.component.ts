import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-pipe',
  templateUrl: './number-pipe.component.html',
  styleUrls: ['./number-pipe.component.scss']
})
export class NumberPipeComponent implements OnInit {

  constructor() { }
  pi: number = 3.14;
  e: number = 2.718281828459045;
  ngOnInit() {
  }

}
