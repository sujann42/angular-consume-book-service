import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.books = this.bookService.getBooks().subscribe((data) => this.books = data);
  }

}
