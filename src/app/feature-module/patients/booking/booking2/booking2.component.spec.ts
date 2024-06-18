import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Booking2Component } from './booking2.component';

describe('Booking2Component', () => {
  let component: Booking2Component;
  let fixture: ComponentFixture<Booking2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Booking2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Booking2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
