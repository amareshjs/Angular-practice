import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {
  // username: string='hello';
  username: string | undefined;
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.userName.subscribe(res => {
      this.username = res
    })
  }
  onChange(uname: any) {
    this.subjectService.userName.next(uname);
  }



}
