import { Book, BookRepository } from 'domain/book'

export class SeeLibrary {
    bookRepository: BookRepository

    
    constructor(bookRepository: BookRepository) {
        this.bookRepository = bookRepository
    }

    see(): Book[] {
        return this.bookRepository.getBooks()
    }
}