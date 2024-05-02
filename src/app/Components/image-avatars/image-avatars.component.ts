import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-avatars',
  templateUrl: './image-avatars.component.html',
  styleUrls: ['./image-avatars.component.scss'],
})
export class ImageAvatarsComponent implements OnInit {
  // Input properties
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() active: boolean | null = null;

  constructor() {}

  ngOnInit(): void {
    this.active = true; // Set active to true when the component initializes
  }
}
