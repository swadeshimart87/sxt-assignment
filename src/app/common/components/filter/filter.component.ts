import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  FILTER_YEARS = [];
  LAUNCH_STATUS = [true, false];

  constructor() { }

  ngOnInit() {
    // initializing year filters
    for (let i = 2006; i <= 2020; i++) {
      this.FILTER_YEARS.push(i);
    }
  }
}
