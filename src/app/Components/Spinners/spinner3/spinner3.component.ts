import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner3',
  templateUrl: './spinner3.component.html',
  styleUrls: ['./spinner3.component.scss']
})
export class Spinner3Component implements OnInit {
  @Input() width:string='7';
  @Input() height:string='7';
  constructor() { }

  ngOnInit(): void {
  }

}
