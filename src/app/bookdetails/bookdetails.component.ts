import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from 'src/assets/data/interface/books';
import { ClassicbooksService } from '../classicbooks.service';
import { FictionbooksService } from '../fictionbooks.service';
import { HistorybooksService } from '../historybooks.service';
import { KidsbooksService } from '../kidsbooks.service';
import { PhilosophybooksService } from '../philosophybooks.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  public static classicBooks: IBook[] = [];
  public static fictionBooks: IBook[] = [];
  public static historyBooks: IBook[] = [];
  public static kidsBooks: IBook[] = [];
  public static philosophyBooks: IBook[] = [];
  public static bookId: number;
  public static genre: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {  
    let book_id = parseInt(this.route.snapshot.paramMap.get('id'))
  }
  Genre(): string {
    return BookdetailsComponent.genre;
  }
  getClassicBooks() {
    return BookdetailsComponent.classicBooks.find(book => book.id === BookdetailsComponent.bookId)
  }

  getFictionBooks() {
    return BookdetailsComponent.fictionBooks.find(book => book.id === BookdetailsComponent.bookId)
  }

  getHistoryBooks() {
    return BookdetailsComponent.historyBooks.find(book => book.id === BookdetailsComponent.bookId)
  }

  getKidsBooks() {
    return BookdetailsComponent.kidsBooks.find(book => book.id === BookdetailsComponent.bookId)
  }

  getPhilosophyBooks() {
    return BookdetailsComponent.philosophyBooks.find(book => book.id === BookdetailsComponent.bookId)
  }
}
