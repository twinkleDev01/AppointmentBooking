import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationHeaderComponent } from './pagination-header.component';

describe('PaginationHeaderComponent', () => {
  let component: PaginationHeaderComponent;
  let fixture: ComponentFixture<PaginationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
