import { TestBed } from '@angular/core/testing';

import { RuntimeEnvironmentService } from './runtime-environment.service';

describe('RuntimeEnviromentService', () => {
  let service: RuntimeEnvironmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuntimeEnvironmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
