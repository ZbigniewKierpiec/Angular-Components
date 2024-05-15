import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch5Component } from './switch5.component';

describe('Switch5Component', () => {
  let component: Switch5Component;
  let fixture: ComponentFixture<Switch5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Switch5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
