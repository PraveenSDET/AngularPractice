import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/assets/data/interface/books';

@Injectable({
  providedIn: 'root'
})
export class HistorybooksService {
  private _historybooks: string = '/assets/data/historybooks.json';

  constructor(private http: HttpClient) { }

  getHistoryBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this._historybooks)
  }
}
