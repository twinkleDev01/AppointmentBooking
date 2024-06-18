import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Booking1Component } from './booking1.component';

describe('Booking1Component', () => {
  let component: Booking1Component;
  let fixture: ComponentFixture<Booking1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Booking1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Booking1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
