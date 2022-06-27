import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/assets/data/interface/books';
import { PhilosophybooksService } from '../philosophybooks.service';
import { Router } from '@angular/router';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';

@Component({
  selector: 'app-philosophybooks',
  templateUrl: './philosophybooks.component.html',
  styleUrls: ['./philosophybooks.component.css'],
  providers: [PhilosophybooksService]
})
export class PhilosophybooksComponent implements OnInit {
  philosophyBooks: IBook[] = [];
  
  constructor(private bookService: PhilosophybooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getPhilosophyBooks().subscribe(
      data => this.philosophyBooks = data
    );
  }

  onSelect(book) {
    this.router.navigate(['/philosophy',book.id]);
    BookdetailsComponent.philosophyBooks = this.philosophyBooks;
    BookdetailsComponent.genre = book.genre;
    BookdetailsComponent.bookId = book.id;
  }

}
