import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JdProcessingComponent } from './jd-processing.component';

describe('JdProcessingComponent', () => {
  let component: JdProcessingComponent;
  let fixture: ComponentFixture<JdProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JdProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JdProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
