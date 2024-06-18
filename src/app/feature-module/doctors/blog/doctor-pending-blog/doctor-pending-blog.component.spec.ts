import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPendingBlogComponent } from './doctor-pending-blog.component';

describe('DoctorPendingBlogComponent', () => {
  let component: DoctorPendingBlogComponent;
  let fixture: ComponentFixture<DoctorPendingBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPendingBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPendingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
