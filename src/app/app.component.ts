import { Component } from '@angular/core';
import { PrimeCalculator } from './app.prime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice';
  prime: number=0;
  primeWithWorker:number=0;
  findPrimeNumber(data:any) {
    this.prime = PrimeCalculator.findNthPrimeNumber(data);
 }

 findPrimeNumberWithWorker(data:any) {
    if (typeof Worker !== 'undefined') {
       // Create a new
       const worker = new Worker(new URL('./app.worker',import.meta.url));
       worker.onmessage = ({ data }) => {
       this.primeWithWorker = data;
       };
       worker.postMessage(data);
    } else {
     
    }
 }
}