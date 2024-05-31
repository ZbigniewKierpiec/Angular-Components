import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadaSelectComponent } from './cascada-select.component';

describe('CascadaSelectComponent', () => {
  let component: CascadaSelectComponent;
  let fixture: ComponentFixture<CascadaSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadaSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascadaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
