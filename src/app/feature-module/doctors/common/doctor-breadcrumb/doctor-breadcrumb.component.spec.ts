import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBreadcrumbComponent } from './doctor-breadcrumb.component';

describe('DoctorBreadcrumbComponent', () => {
  let component: DoctorBreadcrumbComponent;
  let fixture: ComponentFixture<DoctorBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorBreadcrumbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
