import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thermostat4Component } from './thermostat4.component';

describe('Thermostat4Component', () => {
  let component: Thermostat4Component;
  let fixture: ComponentFixture<Thermostat4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thermostat4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thermostat4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
