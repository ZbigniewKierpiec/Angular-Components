import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissibleChipComponent } from './dismissible-chip.component';

describe('DismissibleChipComponent', () => {
  let component: DismissibleChipComponent;
  let fixture: ComponentFixture<DismissibleChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DismissibleChipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DismissibleChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
