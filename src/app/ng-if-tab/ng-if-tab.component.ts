import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-tab',
  templateUrl: './ng-if-tab.component.html',
  styleUrls: ['./ng-if-tab.component.scss']
})
export class NgIfTabComponent implements OnInit {
 selectedSKill:string='angular'
  constructor() { }

  ngOnInit(): void {
  }

}