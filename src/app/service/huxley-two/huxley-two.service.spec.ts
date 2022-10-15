import { TestBed } from '@angular/core/testing';

import { HuxleyTwoService } from './huxley-two.service';

describe('HuxleyTwoService', () => {
  let service: HuxleyTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuxleyTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
