import { TestBed } from '@angular/core/testing';

import { MacthingResumesService } from './macthing-resumes.service';

describe('MacthingResumesService', () => {
  let service: MacthingResumesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacthingResumesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
