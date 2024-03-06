import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedSvgCheckComponent } from './animated-svg-check.component';

describe('AnimatedSvgCheckComponent', () => {
  let component: AnimatedSvgCheckComponent;
  let fixture: ComponentFixture<AnimatedSvgCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedSvgCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedSvgCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
