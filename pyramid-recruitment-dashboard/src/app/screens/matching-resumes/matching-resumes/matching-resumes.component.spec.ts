import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingResumesComponent } from './matching-resumes.component';

describe('MatchingResumesComponent', () => {
  let component: MatchingResumesComponent;
  let fixture: ComponentFixture<MatchingResumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingResumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
