import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentListComponent } from './dependent-list.component';

describe('DependentListComponent', () => {
  let component: DependentListComponent;
  let fixture: ComponentFixture<DependentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
