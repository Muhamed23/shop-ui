import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShopmasterService } from '../shopmaster.service';
import { Items, Itemlist } from '../models/itemlist';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Items[] = [];
  itemTitle: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private shopService: ShopmasterService) { }

  ngOnInit() {
    this.getItems();
  }


  getItems() {
    this.activatedRoute.paramMap.subscribe(params => {
      let currentParams = params['params'];

      this.shopService.getItemPerSection(currentParams.categoryId).subscribe((items: Itemlist) => {
        this.itemTitle = items.routeName;
        this.items = items.items;
      });
    })
  }

}
