import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from 'src/assets/data/interface/books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private _bookdetails: string = '../assets/data/books.json';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<IBook[]> {
    // return bookdetails
    return this.http.get<IBook[]>(this._bookdetails)
  }
}
