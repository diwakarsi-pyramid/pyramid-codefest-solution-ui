import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class JdProcessingService {

  JobDescriptionSummary = null;
  JDSummaryRequest$ = null;

  constructor(
    private httpClient: HttpClient
  ) { }

  

  // getJobDescriptions(): Observable<any> {

  //   if (this.JobDescriptionSummary != null) {
  //     return of(this.JobDescriptionSummary);
  //   } else if(this.JDSummaryRequest$ != null) {
  //     return this.JDSummaryRequest$;
  //   } else {
  //     this.JDSummaryRequest$ = this.fetchJDs();
  //     return this.JDSummaryRequest$;
  //   }

    
    
  // }

  fetchJDs(): Observable<any> {
    const url = "https://api.sampleapis.com/codingresources/codingResources";

    return this.httpClient.get(url);
  }
}
