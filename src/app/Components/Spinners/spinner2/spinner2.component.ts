import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner2',
  templateUrl: './spinner2.component.html',
  styleUrls: ['./spinner2.component.scss']
})
export class Spinner2Component implements OnInit {
  @Input() width:string='20';
  @Input() height:string='20';
  constructor() { }

  ngOnInit(): void {
  }

}
