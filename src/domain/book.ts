interface Book {
    title: String
    author: String
    borrower: User
    borrow_date: number
}

interface BookRepository {
    getBooks: () => Book[]

    getBorrowedBooks: (borrower: User) => Book[]

    updateBorrower: (borrower: User) => void

    updateBorrowDate: (date: number) => void

    addBook: (book: Book) => void
}