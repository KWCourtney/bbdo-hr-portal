import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeStockComponent } from './employee-stock.component';

describe('EmployeeStockComponent', () => {
  let component: EmployeeStockComponent;
  let fixture: ComponentFixture<EmployeeStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
