import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thermostat2Component } from './thermostat2.component';

describe('Thermostat2Component', () => {
  let component: Thermostat2Component;
  let fixture: ComponentFixture<Thermostat2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thermostat2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thermostat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
