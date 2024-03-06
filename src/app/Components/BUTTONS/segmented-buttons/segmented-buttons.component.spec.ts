import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentedButtonsComponent } from './segmented-buttons.component';

describe('SegmentedButtonsComponent', () => {
  let component: SegmentedButtonsComponent;
  let fixture: ComponentFixture<SegmentedButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegmentedButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentedButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
