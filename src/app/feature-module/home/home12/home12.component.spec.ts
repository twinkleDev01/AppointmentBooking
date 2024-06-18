import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home12Component } from './home12.component';

describe('Home12Component', () => {
  let component: Home12Component;
  let fixture: ComponentFixture<Home12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Home12Component]
    });
    fixture = TestBed.createComponent(Home12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
