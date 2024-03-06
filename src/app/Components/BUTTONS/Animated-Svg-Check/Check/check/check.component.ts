import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
  animations: [
    trigger('checkboxAnimation', [
      state(
        'active',
        style({
          backgroundColor: '#2d6a4f',
          borderColor: '#2d6a4f',
        })
      ),
      state(
        'inactive',
        style({
          backgroundColor: '#fff',
          borderColor: '#ddd',
        })
      ),
      transition('active <=> inactive', animate('0.3s')),
    ]),
  ],

})
export class CheckComponent  {

  @Input() check: boolean = false;
  isChecked: boolean = false;

  ngOnInit(): void {
    this.isChecked = this.check;
  }

  toggleCheckbox(): void {
    this.isChecked = !this.isChecked;
  }


}
