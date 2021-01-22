import { TestBed } from '@angular/core/testing';

import { UrlService } from './url.service';

fdescribe('UrlService', () => {
  let service: UrlService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(UrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct url', () => {
    expect(service.getUrl(3, 'abc')).toEqual('/api/v3/abc');
  });

  it('should create http params', () => {
    const param = new Map();
    param.set('limit', 100);
    expect(service.getQueryUrl(param).has('limit')).toEqual(true);
  });
});
