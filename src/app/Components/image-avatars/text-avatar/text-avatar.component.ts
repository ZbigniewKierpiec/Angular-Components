import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-avatar',
  templateUrl: './text-avatar.component.html',
  styleUrls: ['./text-avatar.component.scss'],
})
export class TextAvatarComponent implements OnInit {
  // Define an input property
  @Input() title: string = '';
  @Input() backgroundColor: string = '';
  @Input() color: string = '';
  @Input() size!: string;
  fontSize: any = '';

  fontCalc() {
    this.fontSize = parseInt(this.size) / 2;
  }

  constructor() {}

  ngOnInit(): void {
    this.fontCalc();
  }
}
