import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-icon-buttons',
  templateUrl: './icon-buttons.component.html',
  styleUrls: ['./icon-buttons.component.scss']
})
export class IconButtonsComponent implements OnInit {
@Input()   klasa:string = '';
@Input()   label:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
