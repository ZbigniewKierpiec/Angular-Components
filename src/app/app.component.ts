import { Component } from '@angular/core';
enum ButtonType {
  MaterialButton = 'materialButton',
  AnimatedBorder = 'animatedBorder',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';

  ButtonType = ButtonType;

  handleClick(event: string) {
    console.log(event);
  }
}
