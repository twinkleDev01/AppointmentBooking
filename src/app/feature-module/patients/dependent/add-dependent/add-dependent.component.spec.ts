import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependentComponent } from './add-dependent.component';

describe('AddDependentComponent', () => {
  let component: AddDependentComponent;
  let fixture: ComponentFixture<AddDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDependentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
