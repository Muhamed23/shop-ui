import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './sections/sections.component';
import { ItemListComponent } from './item-list/item-list.component';

const routes: Routes = [
  {
    path: '', component: SectionsComponent,
  },
  {
    path: ':title/:categoryId', component: ItemListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
