import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeProcessingComponent } from './resume-processing.component';

describe('ResumeProcessingComponent', () => {
  let component: ResumeProcessingComponent;
  let fixture: ComponentFixture<ResumeProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
