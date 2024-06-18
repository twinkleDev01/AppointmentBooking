import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAddBlogComponent } from './doctor-add-blog.component';

describe('DoctorAddBlogComponent', () => {
  let component: DoctorAddBlogComponent;
  let fixture: ComponentFixture<DoctorAddBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAddBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorAddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
