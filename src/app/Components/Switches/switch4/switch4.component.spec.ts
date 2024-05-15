import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch4Component } from './switch4.component';

describe('Switch4Component', () => {
  let component: Switch4Component;
  let fixture: ComponentFixture<Switch4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Switch4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
