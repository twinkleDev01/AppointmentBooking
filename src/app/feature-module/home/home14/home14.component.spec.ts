import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home14Component } from './home14.component';

describe('Home14Component', () => {
  let component: Home14Component;
  let fixture: ComponentFixture<Home14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Home14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Home14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
