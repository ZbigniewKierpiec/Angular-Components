import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedButtonBorderComponent } from './animated-button-border.component';

describe('AnimatedButtonBorderComponent', () => {
  let component: AnimatedButtonBorderComponent;
  let fixture: ComponentFixture<AnimatedButtonBorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedButtonBorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedButtonBorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
