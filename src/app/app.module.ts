import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddComponent } from './books/add/add.component';
import { EditComponent } from './books/edit/edit.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './books/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
