import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IBook } from 'src/assets/data/interface/books';

@Injectable({
  providedIn: 'root'
})
export class ClassicbooksService {
  private _classicbooks: string = '/assets/data/classicbooks.json';

  constructor(private http: HttpClient) { }

  getClassicBooks(): Observable<IBook[]> {
    // return bookdetails
    return this.http.get<IBook[]>(this._classicbooks)
  }
}
