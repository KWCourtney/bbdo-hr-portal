import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayScheduleComponent } from './holiday-schedule.component';

describe('HolidayScheduleComponent', () => {
  let component: HolidayScheduleComponent;
  let fixture: ComponentFixture<HolidayScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
