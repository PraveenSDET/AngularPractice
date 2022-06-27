import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/assets/data/interface/books';
import { KidsbooksService } from '../kidsbooks.service';
import { Router } from '@angular/router';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';

@Component({
  selector: 'app-kidsbooks',
  templateUrl: './kidsbooks.component.html',
  styleUrls: ['./kidsbooks.component.css'],
  providers: [KidsbooksService]
})
export class KidsbooksComponent implements OnInit {
  kidsBooks: IBook[] = [];

  constructor(private bookService: KidsbooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getKidsBooks().subscribe(
      data => this.kidsBooks = data
    );
  }

  onSelect(book) {
    this.router.navigate(['/kids',book.id]);
    BookdetailsComponent.kidsBooks = this.kidsBooks;
    BookdetailsComponent.genre = book.genre;
    BookdetailsComponent.bookId = book.id;
  }

}
