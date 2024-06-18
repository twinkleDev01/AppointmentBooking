import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSearchGridComponent } from './doctor-search-grid.component';

describe('DoctorSearchGridComponent', () => {
  let component: DoctorSearchGridComponent;
  let fixture: ComponentFixture<DoctorSearchGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSearchGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorSearchGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
