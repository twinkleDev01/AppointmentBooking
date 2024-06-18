import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSuccessOneComponent } from './booking-success-one.component';

describe('BookingSuccessOneComponent', () => {
  let component: BookingSuccessOneComponent;
  let fixture: ComponentFixture<BookingSuccessOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingSuccessOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSuccessOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
