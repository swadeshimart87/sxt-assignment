import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getUrl(version: number, endPoint: string): string {
    return `/api/v${version}/${endPoint}`;
  }

  getQueryUrl(params: Map<string, string>) {
    if (params && params.size >= 1) {
      let httpParams: HttpParams = new HttpParams();
      params.forEach((value: string, key: string) => httpParams = value ? httpParams.append(key, value) : httpParams);
      return httpParams;
    }
  }
}
