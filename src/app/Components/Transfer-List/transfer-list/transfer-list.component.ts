import { NgSwitchCase } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss'],
})
export class TransferListComponent implements OnInit {
  @ViewChild('item') item?: ElementRef;
  leftList: string[] = ['Item 1', 'Item 2', 'Item 3'];
  rightList: string[] = ['Item 4', 'Item 5', 'Item 6'];
  transList: string[] = [];
  isChecked: any = null;
  active: boolean = false;
  activeTwo: boolean = false;
  activeThree: boolean = false;
  list: string = '';
  numCheckedCheckboxes: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  handleCheckbox(val: string, list: string) {
    const index = this.transList.indexOf(val);

    let copyList = [...this.transList];

    if (index === -1) {
      copyList.push(val);
    } else {
      copyList.splice(index, 1);
    }
    this.transList = copyList;

    this.numCheckedCheckboxes = this.transList.length;

    if (list === 'left' && this.numCheckedCheckboxes > 0) {
      this.active = true;
      this.activeTwo = false;
      
    } else if (list === 'right' && this.numCheckedCheckboxes > 0) {
      this.activeTwo = true;
      this.active = false;
    } else{
      this.activeThree = true;
    }



    console.log(val)
    // switch (list) {
    //   case 'left':

    //     this.active = this.numCheckedCheckboxes > 0;

    //     this.activeTwo = false;

    //     break;

    //   case 'right':

    //     this.activeTwo = this.numCheckedCheckboxes > 0;
    //     this.active = false;
    //     this.activeThree=true;
    //     break;

    //   default:
    //     // this.active = this.numCheckedCheckboxes > 0;
    //     // this.activeTwo = this.numCheckedCheckboxes > 0;
    //     this.active = true;
    //     this.activeTwo = true;

    //     break;
    // }
  }

  moveLeft() {
    const newRightList = this.rightList.filter(
      (item) => !this.transList.includes(item) && !this.leftList.includes(item)
    );
    this.leftList = [
      ...this.leftList,
      ...this.transList.filter((item) => !this.leftList.includes(item)),
    ];
    this.rightList = newRightList;
    this.transList = [];
    this.active = false;
    this.activeTwo = false;
  }

  moveRight() {
    const newLeftList = this.leftList.filter(
      (item) => !this.transList.includes(item) && !this.rightList.includes(item)
    );
    this.rightList = [
      ...this.rightList,
      ...this.transList.filter((item) => !this.rightList.includes(item)),
    ];
    this.leftList = newLeftList;
    this.transList = [];
    this.active = false;
    this.activeTwo = false;
  }

  anyCheckboxCheckedLeft(): boolean {
    return (
      this.transList.length > 0 && // Check if any checkboxes are checked
      this.rightList.length > 0 // Check if the right list is not empty
    );
  }

  anyCheckboxChecked(): boolean {
    return this.transList.length > 0 && this.leftList.length > 0;
  }

  moveAllLeft() {
    this.leftList = [...this.leftList, ...this.rightList];
    this.rightList = [];
  }

  moveAllRight() {
    this.rightList = [...this.leftList, ...this.rightList];
    this.leftList = [];
  }



ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.

}





  ngOnInit() {}
}
