import { TestBed } from '@angular/core/testing';

import { CrsApiService } from './crs-api.service';

describe('CrsApiService', () => {
  let service: CrsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
