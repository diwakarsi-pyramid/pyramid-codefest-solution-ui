import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  requestCount: BehaviorSubject<any> = new BehaviorSubject<any>(0);

  constructor() {
  }

  /* Change request count, if(counter >0) than show loader else hide loader */
  changeRequestCount(counter) {
    if (counter > 0) {
      this.requestCount.next(this.requestCount.value + 1);
    }
    else if (counter < 0) {
      this.requestCount.value && this.requestCount.next(this.requestCount.value - 1);
    }
  }
}