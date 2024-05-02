import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAvatarsComponent } from './image-avatars.component';

describe('ImageAvatarsComponent', () => {
  let component: ImageAvatarsComponent;
  let fixture: ComponentFixture<ImageAvatarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAvatarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
