import { Component, OnInit } from '@angular/core';
import { JdProcessingService } from 'app/services/jd-processing.service';
import { LoaderService } from 'app/services/loader.service';

@Component({
  selector: 'app-jd-processing',
  templateUrl: './jd-processing.component.html',
  styleUrls: ['./jd-processing.component.scss']
})
export class JdProcessingComponent implements OnInit {

  colsFile = [];
  colsValue: any;

  constructor(
    private loaderService: LoaderService,
    private jdService: JdProcessingService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

    this.loaderService.changeRequestCount(1);
    this.jdService.fetchJDs().subscribe(data => {
      this.loaderService.changeRequestCount(-1);
      if (data) {
        Object.keys(data[0]).forEach(key => {
          let obj = {};
          obj['header'] = key;
          obj['field'] = key;
          this.colsFile.push(obj)
        })
        this.colsValue = data;
      }
    });
    
  }


}
