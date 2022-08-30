import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formBook !: FormGroup;
  data:any[]=[];
  id:any;
  constructor(private route:ActivatedRoute,
    private bookService : BookService,
    private fb: FormBuilder,
    private _Router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.bookService.show(this.id).subscribe(book => {
      this.bookService.show(this.id).subscribe(res => {
        this.formBook.patchValue({
          name: res.name,
          author: res.author,
          quantity: res.quantity,
        })
      })
    })
    this.formBook = this.fb.group({
      name: [''],
      author: [''],
      quantity: [''],
    });
  }
  edit(){
    const id = this.id;
    let book: Book = this.formBook.value;
    this.bookService.update(id, book).subscribe(res => {
      this._Router.navigate(['/index']);
    })
  }
}
