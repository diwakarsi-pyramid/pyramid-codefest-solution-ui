import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  colsFile: { header: string; field: string; }[];
  colsValue: any;
  constructor() { }

  ngOnInit(): void {
    this.colsFile = [
      { header: 'SNo', field: 'sno' },
      { header: 'FileName', field: 'fileName' },
    ];
    this.colsValue = [
      { "sno": "1", "fileName": "Arppi" },
      { "sno": "2", "fileName": "Arppi" },
      { "sno": "3", "fileName": "Arppi" },
      { "sno": "4", "fileName": "Arptpi" },
      { "sno": "5", "fileName": "Arppgi" },
      { "sno": "6", "fileName": "Arppib" },
      { "sno": "7", "fileName": "Arppvvi" },
      { "sno": "8", "fileName": "Arppdi" },
      { "sno": "9", "fileName": "Arppri" },
      { "sno": "09", "fileName": "Arprrpi" },
      { "sno": "16", "fileName": "Arppti" },
      { "sno": "166", "fileName": "Arphhpi" },
    ]
  }

}
