import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPracticeComponent } from './overlay-practice.component';

describe('OverlayPracticeComponent', () => {
  let component: OverlayPracticeComponent;
  let fixture: ComponentFixture<OverlayPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
