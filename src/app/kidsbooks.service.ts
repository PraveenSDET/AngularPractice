import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from 'src/assets/data/interface/books';

@Injectable({
  providedIn: 'root'
})
export class KidsbooksService {
  private _kidsbooks: string = '/assets/data/kidsbooks.json';

  constructor(private http: HttpClient) { }

  getKidsBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this._kidsbooks)
  }
}
