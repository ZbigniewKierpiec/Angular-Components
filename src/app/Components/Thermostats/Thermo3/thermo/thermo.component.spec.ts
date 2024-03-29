import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermoComponent } from './thermo.component';

describe('ThermoComponent', () => {
  let component: ThermoComponent;
  let fixture: ComponentFixture<ThermoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThermoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
