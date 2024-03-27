import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
@Input() width:string='20';
@Input() height:string='20';
  constructor() { }

  ngOnInit(): void {
  }

}
