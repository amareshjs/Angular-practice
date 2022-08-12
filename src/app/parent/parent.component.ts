import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements  AfterViewInit {

  value: boolean = true;
  childMsg:string="";
  @ViewChild(ChildComponent)
  childComponentRef: ChildComponent = new ChildComponent;
  constructor() { }
  ngAfterViewInit(): void {
    // this.childComponentRef.parentMsg = 'hello from parent';
  }
  sendMsgToChild(): void {
    this.childComponentRef.parentMsg = 'hello from parent';
  }

  greet(msg:string){

    this.childMsg=msg;
  }




}
