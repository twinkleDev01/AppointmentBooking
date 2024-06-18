import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTimingsComponent } from './available-timings.component';

describe('AvailableTimingsComponent', () => {
  let component: AvailableTimingsComponent;
  let fixture: ComponentFixture<AvailableTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableTimingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
