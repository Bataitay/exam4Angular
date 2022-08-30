import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './books/add/add.component';
import { BooksComponent } from './books/books.component';
import { EditComponent } from './books/edit/edit.component';
import { ShowComponent } from './books/show/show.component';

const routes: Routes = [
  {path: 'index', component: BooksComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'show/:id', component: ShowComponent},
  {path: 'add', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
