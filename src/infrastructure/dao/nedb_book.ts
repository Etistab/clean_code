const Datastore = require('nedb')


class nedbBook implements BookRepository {
    books = new Datastore('datastore/books.db');
    
    getBooks(): Book[] {
        return this.books.find()
    }

    getBorrowedBooks(borrower: User): Book[] {
        return this.books.find({ borrower: borrower })
    }
    
    addBook(book: Book): void {
        this.books.insert(book)
    }

    updateBorrower(bookTitle: String, borrower: User): void {
        this.books.update({ title: bookTitle }, { $set: { borrower: borrower }})
    }

    updateBorrowDate(bookTitle: String, date: number): void {
        this.books.update({ title: bookTitle }, { $set: { borrow_date: date }})
    }
}