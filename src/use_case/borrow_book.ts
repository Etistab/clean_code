class BorrowBook {
    user: User
    bookRepository: BookRepository


    constructor(user: User, bookRepository: BookRepository) {
        this.user = user
        this.bookRepository = bookRepository
    }

    borrow() {
        if (this.checkAccessRight() && this.canBorrow()) {
            this.bookRepository.updateBorrower(this.user)
            this.bookRepository.updateBorrowDate(Date.now())
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