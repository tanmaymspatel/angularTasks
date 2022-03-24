import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorlistFilterPresentationComponent } from './mentorlist-filter-presentation.component';

describe('MentorlistFilterPresentationComponent', () => {
  let component: MentorlistFilterPresentationComponent;
  let fixture: ComponentFixture<MentorlistFilterPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorlistFilterPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorlistFilterPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
