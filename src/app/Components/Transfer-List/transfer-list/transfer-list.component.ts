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
  // ViewChild to reference HTML element if necessary
  @ViewChild('item') item?: ElementRef;
  // Arrays to hold items for left and right lists
  leftList: string[] = ['Item 1', 'Item 2', 'Item 3'];
  rightList: string[] = ['Item 4', 'Item 5', 'Item 6'];
  // Array to hold temporarily selected items
  transList: string[] = [];

  // Variables to manage checkbox state and button activation
  isChecked: any = null;
  active: boolean = false;
  activeTwo: boolean = false;
  // Other variables if necessary
  list: string = '';
  numCheckedCheckboxes: any;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Method to handle checkbox selection

  handleCheckbox(val: string, list: string) {
    const index = this.transList.indexOf(val);

    let copyList = [...this.transList];
    // Toggle the selection of the item
    if (index === -1) {
      copyList.push(val);
    } else {
      copyList.splice(index, 1);
    }
    this.transList = copyList;

    // Update the number of checked checkboxes

    this.numCheckedCheckboxes = this.transList.length;

    // Toggle button activation based on list and checkbox selection

    if (list === 'left' && this.numCheckedCheckboxes > 0) {
      this.active = true;
      this.activeTwo = false;
    } else if (list === 'right' && this.numCheckedCheckboxes > 0) {
      this.activeTwo = true;
      this.active = false;
    }
  }

  // Method to move selected items from right to left list

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

  // Method to move selected items from left to right list

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

  // Method to move all items from right to left list

  moveAllLeft() {
    this.leftList = [...this.leftList, ...this.rightList];
    this.rightList = [];
  }

  // Method to move all items from left to right list

  moveAllRight() {
    this.rightList = [...this.leftList, ...this.rightList];
    this.leftList = [];
  }

  ngOnInit() {}
}
