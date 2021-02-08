import { Book , BookRepository } from 'domain/book'
import { User } from 'domain/user'
const Datastore = require('nedb')


export class NedbBook implements BookRepository {
    books = new Datastore('datastore/books.db');
    
    getBook(title: String): Book {
        return this.books.findOne({ title: title })
    }

    getBooks(): Book[] {
        return this.books.find()
    }

    getBorrowedBooks(borrower: User): Book[] {
        return this.books.find({ borrower: borrower })
    }
    
    addBook(book: Book): void {
        this.books.insert(book)
    }
    
    addBooks(books: Book[]): void {
        this.books.insert(books)
    }

    updateBorrower(bookTitle: String, borrower: User): void {
        this.books.update({ title: bookTitle }, { $set: { borrower: borrower }})
    }

    updateBorrowDate(bookTitle: String, date: number): void {
        this.books.update({ title: bookTitle }, { $set: { borrow_date: date }})
    }
}