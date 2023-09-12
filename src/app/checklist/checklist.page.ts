import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss'],
})
export class ChecklistPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectMonth(month: string) {
    console.log(`Selected month: ${month}`);
    // Handle the selected month as needed
  }

}
