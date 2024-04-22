import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingThermostatComponent } from './heating-thermostat.component';

describe('HeatingThermostatComponent', () => {
  let component: HeatingThermostatComponent;
  let fixture: ComponentFixture<HeatingThermostatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatingThermostatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatingThermostatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
