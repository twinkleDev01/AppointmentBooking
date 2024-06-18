import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home10Component } from './home10.component';

describe('Home10Component', () => {
  let component: Home10Component;
  let fixture: ComponentFixture<Home10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Home10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
