import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedControlComponent } from './animated-control.component';

describe('AnimatedControlComponent', () => {
  let component: AnimatedControlComponent;
  let fixture: ComponentFixture<AnimatedControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
