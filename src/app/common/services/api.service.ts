import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';
import { LaunchModel } from '../models/launch.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private urlService: UrlService) { }

  getAllPrograms(params = new Map(), limit = 100): Observable<LaunchModel[]> {
    params.set('limit', limit);
    let headers = new HttpHeaders();
    headers = headers.append('content-encoding', 'gzip');
    return this.httpClient.get<LaunchModel[]>(this.urlService.getUrl(3, 'launches'), {params: this.urlService.getQueryUrl(params)});
  }
}
