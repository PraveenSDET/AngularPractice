import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/assets/data/interface/books';
import { FictionbooksService } from '../fictionbooks.service';
import { Router } from '@angular/router';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';

@Component({
  selector: 'app-fictionalbooks',
  templateUrl: './fictionalbooks.component.html',
  styleUrls: ['./fictionalbooks.component.css'],
  providers: [FictionbooksService]
})
export class FictionalbooksComponent implements OnInit {
  fictionBooks: IBook[] = [];
  
  constructor(private bookService: FictionbooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getFictionBooks()
      .subscribe(data => this.fictionBooks = data);
  }

  onSelect(book) {
    this.router.navigate(['/fiction',book.id]);
    BookdetailsComponent.fictionBooks = this.fictionBooks;
    BookdetailsComponent.genre = book.genre;
    BookdetailsComponent.bookId = book.id;
  }

}
