import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book: Book[] = [];
  getAllApi = 'http://127.0.0.1:8000/api/index';
  storeApi = 'http://127.0.0.1:8000/api/store';
  deleteApi = 'http://127.0.0.1:8000/api/destroy/';
  getApiId = 'http://127.0.0.1:8000/api/show/';
  editApi = 'http://127.0.0.1:8000/api/update/';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get<Book[]>(this.getAllApi);
  }
  store(data:any): Observable<any> {
    return this.http.post<Book[]>(this.storeApi, data);
  }
  show(id:any): Observable<any>{
    return this.http.get<Book[]>(this.getApiId + id)
  }
  update(id:any, data: any): Observable<any> {
    return this.http.put<Book[]>(this.editApi+id, data)
  }
  destroy(id:any): Observable<any> {
    return this.http.delete<Book[]>(this.deleteApi+id);
  }
}
