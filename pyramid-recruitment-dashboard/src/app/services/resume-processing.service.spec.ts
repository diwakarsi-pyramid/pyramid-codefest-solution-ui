import { TestBed } from '@angular/core/testing';

import { ResumeProcessingService } from './resume-processing.service';

describe('ResumeProcessingService', () => {
  let service: ResumeProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
