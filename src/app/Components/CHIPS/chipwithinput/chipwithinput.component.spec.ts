import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipwithinputComponent } from './chipwithinput.component';

describe('ChipwithinputComponent', () => {
  let component: ChipwithinputComponent;
  let fixture: ComponentFixture<ChipwithinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipwithinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipwithinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
