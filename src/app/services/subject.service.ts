import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  userName=new Subject<string>();
  // userName=new BehaviorSubject<string>('Hello');

  dataEmit=new ReplaySubject<string>(5,5000);

  asyncDataEmit=new AsyncSubject<string>();

  constructor() { }
}
