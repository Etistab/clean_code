class AddBook {
    user: User
    bookRepository: BookRepository

    
    constructor(user: User, bookRepository: BookRepository) {
        this.user = user
        this.bookRepository = bookRepository
    }

    add(book: Book) {
        if (this.checkAccessRight()) {
            this.bookRepository.addBook(book)
        }
    }
    
    checkAccessRight(): Boolean {
        if (this.user.type == 'Librarian') return true
        return false
    }
}