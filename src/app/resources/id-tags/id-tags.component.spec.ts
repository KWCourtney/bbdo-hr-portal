import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdTagsComponent } from './id-tags.component';

describe('IdTagsComponent', () => {
  let component: IdTagsComponent;
  let fixture: ComponentFixture<IdTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
