import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleBtnComponent } from './ripple-btn.component';

describe('RippleBtnComponent', () => {
  let component: RippleBtnComponent;
  let fixture: ComponentFixture<RippleBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RippleBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RippleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
