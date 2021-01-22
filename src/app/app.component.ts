import { Component, OnInit } from '@angular/core';
import { ApiService } from './common/services/api.service';
import { LaunchModel } from './common/models/launch.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SpaceX Launch Programs';
  launches: LaunchModel[];
  isLoading = false;
  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.api.getAllPrograms().subscribe(data => this.launches = data, err => console.log('Error from API: ', err));
    this.activatedRoute.queryParams.pipe(
      switchMap(params => {
        this.isLoading = true;
        const httpParams = new Map();
        httpParams.set('launch_year', params['launch_year']);
        httpParams.set('launch_success', params['launch_success']);
        httpParams.set('land_success', params['land_success']);
        return this.api.getAllPrograms(httpParams);
      })
    ).subscribe(data => {this.launches = data; this.isLoading = false; }, err => {this.isLoading = false; });
  }
}
