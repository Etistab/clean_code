interface Book {
    title: String
    author: String
    borrower: User
    borrow_date: number
}

interface BookRepository {
    getBooks: () => Book[]

    getBorrowedBooks: (borrower: User) => Book[]

    addBook: (book: Book) => void

    updateBorrower: (bookTitle: String, borrower: User) => void

    updateBorrowDate: (bookTitle: String, date: number) => void
}