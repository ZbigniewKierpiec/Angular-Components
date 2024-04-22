import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dismissible-chip',
  templateUrl: './dismissible-chip.component.html',
  styleUrls: ['./dismissible-chip.component.scss'],
})
export class DismissibleChipComponent implements OnInit {
  @Input() text: string = 'Monday';
  @Input() color: string = 'white';
  @Input() background: string = 'black';
  active: boolean = false;

  constructor(private renderer: Renderer2) {}



  Dismissible(){
    this.active=true;
  }






  ngOnInit(): void {}
}
