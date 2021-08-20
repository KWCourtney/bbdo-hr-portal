import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenefitsPayrollComponent } from './benefits-payroll.component';

describe('BenefitsPayrollComponent', () => {
  let component: BenefitsPayrollComponent;
  let fixture: ComponentFixture<BenefitsPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenefitsPayrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BenefitsPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
