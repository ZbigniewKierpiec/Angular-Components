import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleMultipleComponent } from './button-toggle-multiple.component';

describe('ButtonToggleMultipleComponent', () => {
  let component: ButtonToggleMultipleComponent;
  let fixture: ComponentFixture<ButtonToggleMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonToggleMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonToggleMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
