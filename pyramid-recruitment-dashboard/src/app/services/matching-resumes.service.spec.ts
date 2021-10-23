import { TestBed } from '@angular/core/testing';

import { MatchingResumesService } from './matching-resumes.service';

describe('MatchingResumesService', () => {
  let service: MatchingResumesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchingResumesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
