import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-border',
  templateUrl: './animated-border.component.html',
  styleUrls: ['./animated-border.component.scss'],
})
export class AnimatedBorderComponent implements OnInit {
  @Input() label: string = '';
  constructor() {}

  ngOnInit(): void {}
}
