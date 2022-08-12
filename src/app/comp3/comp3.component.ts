import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
  // username: string = 'hello';
  username:string | undefined;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {

    this.subjectService.userName.subscribe(res => {
      this.username = res;
    })

  }

  onChange(uname:any){

    this.subjectService.userName.next(uname);
   }

}
