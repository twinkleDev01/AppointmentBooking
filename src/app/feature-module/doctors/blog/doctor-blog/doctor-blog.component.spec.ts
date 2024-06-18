import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBlogComponent } from './doctor-blog.component';

describe('DoctorBlogComponent', () => {
  let component: DoctorBlogComponent;
  let fixture: ComponentFixture<DoctorBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
