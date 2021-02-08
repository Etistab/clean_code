import { User } from 'domain/user'
import { BookRepository } from 'domain/book'

export class BorrowBook {
    user: User
    bookRepository: BookRepository


    constructor(user: User, bookRepository: BookRepository) {
        this.user = user
        this.bookRepository = bookRepository
    }

    borrow(bookTitle: String) {
        if (this.checkAccessRight() && this.canBorrow()) {
            this.bookRepository.updateBorrower(bookTitle, this.user)
            this.bookRepository.updateBorrowDate(bookTitle, Date.now())
        }
    }

    canBorrow(): Boolean {
        const books = this.bookRepository.getBorrowedBooks(this.user)

        if (books.length < 3) return true
        return false
    }
    
    checkAccessRight(): Boolean {
        if (this.user.type == 'Member' || this.user.type == 'Librarian') return true
        return false
    }
}