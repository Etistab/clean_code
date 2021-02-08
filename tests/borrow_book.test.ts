import { BorrowBook } from '../src/use_case/borrow_book';
import { NedbBook } from '../src/infrastructure/dao/nedb_book';
import { UserType } from '../src/domain/user';


describe('Use case: borrow book', () => {
  const bookRepo = new NedbBook()
  
  const librarian = { id: 1, type: 'Librarian' as UserType }
  
  const book = { title: 'Autobiographie de Poutine', author: 'V.Poutine' }


  it('When I log in, i get the right user', async () => {
    const borrowBook = new BorrowBook(librarian, bookRepo)
    bookRepo.addBook(book)

    borrowBook.borrow(book.title)
    const borrowedBook = bookRepo.getBook(book.title)

    expect(borrowedBook.borrower).toEqual(librarian.id);
  });
});