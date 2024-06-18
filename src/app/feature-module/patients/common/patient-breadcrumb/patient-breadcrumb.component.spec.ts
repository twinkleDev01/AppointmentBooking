import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBreadcrumbComponent } from './patient-breadcrumb.component';

describe('PatientBreadcrumbComponent', () => {
  let component: PatientBreadcrumbComponent;
  let fixture: ComponentFixture<PatientBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientBreadcrumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
