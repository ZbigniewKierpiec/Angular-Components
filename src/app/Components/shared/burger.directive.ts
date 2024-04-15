import { Directive, HostBinding, HostListener } from '@angular/core';
@Directive({
  selector: '[appBurger]',
})
export class BurgerDirective {
  @HostBinding('class.active') active = false;
  @HostListener('click') toggleOpen() {
    this.active = !this.active;
    console.log('click');
  }
}
