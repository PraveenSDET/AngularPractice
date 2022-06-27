import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/assets/data/interface/books';

@Injectable({
  providedIn: 'root'
})
export class FictionbooksService {
  private _fictionbooks: string = '/assets/data/fictionbooks.json';

  constructor(private http: HttpClient) { }

  getFictionBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this._fictionbooks)
  }  
}
