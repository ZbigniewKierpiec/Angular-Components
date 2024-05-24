import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.scss']
})
export class LockComponent implements OnInit {
  constructor() { }
  locked:boolean=false;


toggle(){
  this.locked =!this.locked;
}








  ngOnInit(): void {
  }

}
