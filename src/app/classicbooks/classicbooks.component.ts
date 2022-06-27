import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/assets/data/interface/books';
import { ClassicbooksService } from '../classicbooks.service';
import { Router } from '@angular/router';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';

@Component({
  selector: 'app-classicbooks',
  templateUrl: './classicbooks.component.html',
  styleUrls: ['./classicbooks.component.css'],
  providers: [ClassicbooksService]
})
export class ClassicbooksComponent implements OnInit {
  classicBooks: IBook[] = [];
  constructor(private bookService: ClassicbooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getClassicBooks().subscribe(
      data => this.classicBooks = data        
    );
  }

  onSelect(book) {
    this.router.navigate(['/classics',book.id]);
    BookdetailsComponent.classicBooks = this.classicBooks;
    BookdetailsComponent.genre = book.genre;
    BookdetailsComponent.bookId = book.id;
  }

}
