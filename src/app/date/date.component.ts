import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;

  someNumber : number = 10;

  constructor() { 
    setInterval( 
      ()=>{ /* function codes to execute every second */
      let currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
      }, 
      1000 /* run every second */
    )

  }

  ngOnInit() {

  }

  addTwoNumbers( a: number, b: number) {
      return a + b ;
    }

}
