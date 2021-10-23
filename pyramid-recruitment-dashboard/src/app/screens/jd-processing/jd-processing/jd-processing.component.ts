import { Component, OnInit } from '@angular/core';
import { JdProcessingService } from 'app/services/jd-processing.service';
import { LoaderService } from 'app/services/loader.service';

@Component({
  selector: 'app-jd-processing',
  templateUrl: './jd-processing.component.html',
  styleUrls: ['./jd-processing.component.scss']
})
export class JdProcessingComponent implements OnInit {

  constructor(
    private loaderService: LoaderService,
    private jdService: JdProcessingService
  ) { }

  ngOnInit(): void {
    this.loaderService.changeRequestCount(1);
    this.jdService.fetchJDs().subscribe(data => {
      this.loaderService.changeRequestCount(-1);
      if (data) {
        console.log('Fteching data:::', data)
      }
    })
  }

}
