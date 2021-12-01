import { TestBed } from '@angular/core/testing';

import { WebPaintAPIService } from './webpaint-api.service';

describe('WebPaintAPIService', () => {
  let service: WebPaintAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebPaintAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});