import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
enum ButtonType {
  MaterialButton = 'materialButton',
  AnimatedBorder = 'animatedBorder',
}
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'Add';
  @Input() style: string = 'material-button';
  @Input() customClass: string = '';
  @Input() buttonType: ButtonType = ButtonType.MaterialButton
  @Output() onAction: EventEmitter<string> = new EventEmitter<string>();


  handleClick() {
    this.onAction.emit('dziala to');
  }



  ngOnInit(): void {

  }
}
