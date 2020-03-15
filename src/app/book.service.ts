import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: any;

  constructor(private http: HttpClient) {
  }

  getBooks() {
    return this.http.get('http://localhost:8080/findAllBooks');
  }
}
