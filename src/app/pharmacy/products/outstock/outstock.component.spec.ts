import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstockComponent } from './outstock.component';

describe('OutstockComponent', () => {
  let component: OutstockComponent;
  let fixture: ComponentFixture<OutstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
