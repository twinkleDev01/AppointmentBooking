import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentComponent } from './dependent.component';

describe('DependentComponent', () => {
  let component: DependentComponent;
  let fixture: ComponentFixture<DependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
