import { TestBed } from '@angular/core/testing';

import { JdProcessingService } from './jd-processing.service';

describe('JdProcessingService', () => {
  let service: JdProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JdProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
