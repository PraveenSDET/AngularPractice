import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/assets/data/interface/books';

@Injectable({
  providedIn: 'root'
})
export class PhilosophybooksService {
  private _philosophybooks: string = '/assets/data/philosophybooks.json';

  constructor(private http: HttpClient) { }

  getPhilosophyBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this._philosophybooks)
  }
}
