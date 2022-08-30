import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
declare var window: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];
  id: number = 0;
  deleteid: any;
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.deleteid = new window.bootstrap.Modal(
      document.getElementById('deleteEmployee')
    )
    this.index();
  }
  index() {
    this.bookService.getAll().subscribe(res => {
      this.books = res;
    })

  }
  openDelete(id: any) {
    this.id = id;
    this.deleteid.show()
  }
  delete() {
    this.bookService.destroy(this.id).subscribe(res => {
      this.books = this.books.filter(_ => _.id !== this.id);
      this.deleteid.hide();
    })
  }
}
