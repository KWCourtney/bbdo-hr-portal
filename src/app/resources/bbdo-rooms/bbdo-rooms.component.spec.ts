import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbdoRoomsComponent } from './bbdo-rooms.component';

describe('BbdoRoomsComponent', () => {
  let component: BbdoRoomsComponent;
  let fixture: ComponentFixture<BbdoRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BbdoRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BbdoRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
