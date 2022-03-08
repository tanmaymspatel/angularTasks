import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamictemplatingComponent } from './dynamictemplating.component';

describe('DynamictemplatingComponent', () => {
  let component: DynamictemplatingComponent;
  let fixture: ComponentFixture<DynamictemplatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamictemplatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamictemplatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
