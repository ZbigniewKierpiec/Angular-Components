import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transfer-list',
  templateUrl: './transfer-list.component.html',
  styleUrls: ['./transfer-list.component.scss']
})
export class TransferListComponent {
  @ViewChild('item') item?: ElementRef;
  leftList: string[] = ["Item 1", "Item 2", "Item 3"];
  rightList: string[] = ["Item 4", "Item 5", "Item 6"];
  transList: string[] = [];
  isChecked:any=null;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  anyCheckboxChecked(): boolean {
    return this.transList.length > 0;

  }

  handleCheckbox(val: string) {
      this.isChecked = this.transList.includes(val);
      this.isChecked = true;
      if (this.isChecked) {
             this.isChecked
      } else {
        // Checkbox with value 'val' is unchecked
        this.isChecked=false;
      }

    const index = this.transList.indexOf(val);
    const copyList = [...this.transList];

    if (index === -1) {
      copyList.push(val);
    } else {
      copyList.splice(index, 1);
    }
    this.transList = copyList;
  }

  moveLeft() {
    this.isChecked = false;
    const newRightList = this.rightList.filter(item => !this.transList.includes(item));
    this.leftList = [...this.leftList, ...this.transList];
    this.rightList = newRightList;
    this.transList = [];
  }

  moveRight() {
    this.isChecked = false;
    const newLeftList = this.leftList.filter(item => !this.transList.includes(item));
    this.rightList = [...this.rightList, ...this.transList];
    this.leftList = newLeftList;
    this.transList = [];

  }

  moveAllLeft() {
    this.leftList = [...this.leftList, ...this.rightList];
    this.rightList = [];
  }

  moveAllRight() {
    this.rightList = [...this.leftList, ...this.rightList];
    this.leftList = [];
  }









}
