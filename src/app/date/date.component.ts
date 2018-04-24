import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  date: Date;
  
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    barTitleIfEmpty: 'Click to select a date'
  };
  
  constructor() {
    this.date = new Date()
   }
  ngOnInit() {
  }
  showSelecedDate() {
    
  }
}
