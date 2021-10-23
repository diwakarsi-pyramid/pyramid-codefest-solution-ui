import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderTilesComponent } from './loader-tiles.component';

describe('LoaderComponent', () => {
  let component: LoaderTilesComponent;
  let fixture: ComponentFixture<LoaderTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderTilesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});