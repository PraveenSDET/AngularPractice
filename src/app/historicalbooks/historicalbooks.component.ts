import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/assets/data/interface/books';
import { HistorybooksService } from '../historybooks.service';
import { Router } from '@angular/router';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';

@Component({
  selector: 'app-historicalbooks',
  templateUrl: './historicalbooks.component.html',
  styleUrls: ['./historicalbooks.component.css'],
  providers: [HistorybooksService]
})
export class HistoricalbooksComponent implements OnInit {
  historyBooks: IBook[] = [];

  constructor(private bookService: HistorybooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getHistoryBooks().subscribe(
      data => this.historyBooks = data
    );
  }

  onSelect(book) {
    this.router.navigate(['/history',book.id]);
    BookdetailsComponent.historyBooks = this.historyBooks;
    BookdetailsComponent.bookId = book.id;
    BookdetailsComponent.genre = book.genre;
    }

}
