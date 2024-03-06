import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleSingielComponent } from './button-toggle-singiel.component';

describe('ButtonToggleSingielComponent', () => {
  let component: ButtonToggleSingielComponent;
  let fixture: ComponentFixture<ButtonToggleSingielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonToggleSingielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonToggleSingielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
