import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialPadLockComponent } from './dial-pad-lock.component';

describe('DialPadLockComponent', () => {
  let component: DialPadLockComponent;
  let fixture: ComponentFixture<DialPadLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialPadLockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialPadLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
