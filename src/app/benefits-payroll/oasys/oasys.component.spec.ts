import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OasysComponent } from './oasys.component';

describe('OasysComponent', () => {
  let component: OasysComponent;
  let fixture: ComponentFixture<OasysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OasysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OasysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
