import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-button-border',
  templateUrl: './animated-button-border.component.html',
  styleUrls: ['./animated-button-border.component.scss']
})
export class AnimatedButtonBorderComponent implements OnInit {
@Input()    label:string=''
  constructor() { }

  ngOnInit(): void {
  }

}
