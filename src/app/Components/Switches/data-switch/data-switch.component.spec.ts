import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSwitchComponent } from './data-switch.component';

describe('DataSwitchComponent', () => {
  let component: DataSwitchComponent;
  let fixture: ComponentFixture<DataSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
