import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial-pad-lock',
  templateUrl: './dial-pad-lock.component.html',
  styleUrls: ['./dial-pad-lock.component.scss']
})
export class DialPadLockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



 active:boolean=false;

  count = 0;
  outputDigits:string[]=[];
  password: string = '';
  maxCount: number = 4;



see(){
  this.active =! this.active;
}





  addDigit(digit: string) {
    console.log(digit)
    if (this.count < this.maxCount) {
 this.outputDigits.push(digit)
      this.updatePassword();
      this.count++;
    }


  }

  removeLastDigit() {
    if (this.password.length > 0) {
        this.outputDigits.pop();
         this.updatePassword()
         this.count--;

    }
  }


  updatePassword(): void {
    this.password = this.outputDigits.join('');
  }

clear(){
   this.outputDigits=[];
   this.count = 0;
}





}
