import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {

  // private _loggedIn:boolean | undefined;
  @Input() loggedIn:boolean | undefined;
  msg:string | undefined;
  parentMsg:string | undefined;
  @Output() greetEvent=new EventEmitter;
  msgToParent="msg From Child";
//    get loggedIn():boolean{
//     return this.loggedIn;
//  }

//  @Input()
//  set loggedIn(value:boolean){
//   console.log(value);
//   this._loggedIn=value;
//   if(value==true){
//     this.msg="Welcome back"
//   }
//   else{
//     this.msg="please LogIn"
//   }

//  }

  callParentGreet(){
    this.greetEvent.emit(this.msgToParent);
  }


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
      const loggedInValue=changes['loggedIn'];
      if(loggedInValue.currentValue==true){
        this.msg="Welcome back";
      }
      else{
            this.msg="please LogIn"

      }
  }

}
