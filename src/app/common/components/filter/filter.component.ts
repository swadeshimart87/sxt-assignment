import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  FILTER_YEARS = [];
  LAUNCH_STATUS = [true, false];
  launch_year: string;
  launch_success: string;
  land_success: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // initializing year filters
    for (let i = 2006; i <= 2020; i++) {
      this.FILTER_YEARS.push(i);
    }
    this.activatedRoute.queryParams.subscribe(params => {
      this.launch_year = params['launch_year'];
      this.launch_success = params['launch_success'];
      this.land_success = params['land_success'];
    });
  }

  toggleSelection(butonType: string, text: string) {
    if (butonType === 'launch_year' && String(text) === this.launch_year) {
      this.router.navigate([], {
        queryParamsHandling: 'merge',
        queryParams: {
          launch_year: undefined
        }
      });
      return false;
    } else if (butonType === 'launch_success' && String(text) === this.launch_success) {
      this.router.navigate([], {
        queryParamsHandling: 'merge',
        queryParams: {
          launch_success: undefined
        }
      });
      return false;
    } else if (butonType === 'land_success' && String(text) === this.land_success) {
      this.router.navigate([], {
        queryParamsHandling: 'merge',
        queryParams: {
          land_success: undefined
        }
      });
      return false;
    }
    return true;
  }
}
