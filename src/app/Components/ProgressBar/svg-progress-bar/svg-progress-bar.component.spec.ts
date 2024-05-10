import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgProgressBarComponent } from './svg-progress-bar.component';

describe('SvgProgressBarComponent', () => {
  let component: SvgProgressBarComponent;
  let fixture: ComponentFixture<SvgProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
