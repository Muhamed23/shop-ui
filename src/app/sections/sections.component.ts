import { Component, OnInit } from '@angular/core';
import { ShopmasterService } from '../shopmaster.service';
import { Sections } from '../models/sections';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
 sectionList:Sections[] = [];
  constructor(private shopService: ShopmasterService) { }

  ngOnInit() {
    this.getSections();
  }

  getSections() {
    this.shopService.getSections().subscribe(sections => this.sectionList = sections.data);
  }

}
