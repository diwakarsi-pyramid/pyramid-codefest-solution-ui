import { Component, HostBinding, OnInit } from '@angular/core';
import { LoaderService } from './../../services/loader.service';

@Component({
  selector: 'app-loader',
  template: '<app-loader-tiles></app-loader-tiles>',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @HostBinding('class')
  className = '';

  constructor(
    private loaderService: LoaderService
    ) {
    this.loaderService.requestCount.subscribe(count => {
      this.className = count > 0 ? 'show' : '';
    });
  }

  ngOnInit() {
  }
}