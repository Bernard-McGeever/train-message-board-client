import { TestBed } from '@angular/core/testing';

import { DeparturesAndArrivalsApi } from './departures-and-arrivals-api';

describe('DeparturesAndArrivalsApiService', () => {
  let service: DeparturesAndArrivalsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeparturesAndArrivalsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
