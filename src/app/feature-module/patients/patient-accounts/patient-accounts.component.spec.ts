import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAccountsComponent } from './patient-accounts.component';

describe('PatientAccountsComponent', () => {
  let component: PatientAccountsComponent;
  let fixture: ComponentFixture<PatientAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
