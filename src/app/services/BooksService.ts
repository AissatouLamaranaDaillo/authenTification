import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Book } from '../../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
    books: Book[] = [];
  booksSubject = new Subject<Book[]>();

  emitBooks() {
    this.booksSubject.next(this.books);
  }
  
}
