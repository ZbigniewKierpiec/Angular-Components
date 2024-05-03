import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverflowBadgeComponent } from './overflow-badge.component';

describe('OverflowBadgeComponent', () => {
  let component: OverflowBadgeComponent;
  let fixture: ComponentFixture<OverflowBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverflowBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverflowBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
