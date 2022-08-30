import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formBook !: FormGroup;
  data:any[]=[];
  constructor(private fb: FormBuilder,
    private _Router:Router,
    private bookService : BookService) { }

  ngOnInit(): void {
    this.formBook = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      author: new FormControl('',[
        Validators.required
      ]),
      quantity: new FormControl('',[
        Validators.required
      ]),
    });
  }
  add(){
    let formData = this.formBook.value;
    let book: Book = {
      name: formData.name,
      author: formData.author,
      quantity: formData.quantity,
    }
    this.bookService.store(book).subscribe(res => {
      this._Router.navigate(['/index']);

    })
  }

}
