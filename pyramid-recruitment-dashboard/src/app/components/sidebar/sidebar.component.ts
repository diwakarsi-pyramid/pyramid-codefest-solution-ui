import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  menuItems: RouteInfo[] = [
    { path: '/jd-processing', title: 'JD Processing', icon: 'dashboard', class: '' },
    { path: '/resume-processing', title: 'Resume Processing', icon: 'person', class: '' },
    { path: '/matching-resumes', title: 'Matching Resumes', icon: 'content_paste', class: '' },
    { path: '/feedbacks', title: 'Candidate Details', icon: 'library_books', class: '' },
  ];




  constructor() { }

  ngOnInit() {
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
