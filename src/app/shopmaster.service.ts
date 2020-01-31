import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Sections } from './models/sections';
import { Itemlist } from './models/itemlist';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShopmasterService {
  private apiurl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getSections() {
    return this.http.get<{ message: string, data: Sections[] }>(`${this.apiurl}/sections`).pipe(map(sections => sections))
  }

  getItemPerSection(categoryId: string) {
    var categoryNumb = +categoryId;
    return this.http.get<{ message: string, data: Itemlist }>(`${this.apiurl}/itemlist/${categoryNumb}`).pipe(map(itemList => itemList.data))
  }

}


