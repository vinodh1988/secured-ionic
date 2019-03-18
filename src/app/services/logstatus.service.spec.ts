import { TestBed } from '@angular/core/testing';

import { LogstatusService } from './logstatus.service';

describe('LogstatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogstatusService = TestBed.get(LogstatusService);
    expect(service).toBeTruthy();
  });
});
