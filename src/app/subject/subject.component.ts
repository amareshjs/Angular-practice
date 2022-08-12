import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  // username :string='hello';
  username:string | undefined;
  user1List:string[]=[];
  user2List :string[]=[];
  user3List:string[]=[];
  subscribeMod2:boolean=false;
  subscribeMod3:boolean=false;
  subscription2 = new Subscription;
  subscription3 = new Subscription;
  asyncData:string="";

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {

    this.subjectService.userName.subscribe(res=>{
      this.username=res
    })

    this.subjectService.dataEmit.subscribe(res=>{
      this.user1List.push(res);
    })

    this.subjectService.asyncDataEmit.subscribe(res=>{
      this.asyncData=res;
    })

  }

  onDataAdd(data:any){
    this.subjectService.dataEmit.next(data);
  }
  user2Subscribe(){

    if(this.subscribeMod2){
      this.subscription2.unsubscribe();
      this.subscribeMod2=!this.subscribeMod2;
    }else{

      this.subscription2=this.subjectService.dataEmit.subscribe(res=>{
        this.user2List.push(res)
      })
      this.subscribeMod2=!this.subscribeMod2;
    }
  }
  user3Subscribe(){

    if(this.subscribeMod3){
      this.subscription3.unsubscribe();
      this.subscribeMod3=!this.subscribeMod3;
    }else{

      this.subscription3=this.subjectService.dataEmit.subscribe(res=>{
        this.user3List.push(res)
      })
      this.subscribeMod3=!this.subscribeMod3;
    }
  }


  // asyncAdd Method
  onAsyncDataAdd(data:any){
    console.log(data);
    this.subjectService.asyncDataEmit.next(data);
  }


  onComplete(){
    this.subjectService.asyncDataEmit.complete();
  }

}
