import { AddBook } from '../src/use_case/add_book';
import { UserType } from '../src/domain/user';
import { NedbBook } from '../src/infrastructure/dao/nedb_book';


describe('Use case: add book', () => {
  const bookRepo = new NedbBook()

  const librarian = { id: 1, type: 'Librarian' as UserType }
  const member = { id: 2, type: 'Member' as UserType }
  const guest = { id: 3, type: 'Guest' as UserType }

  const book = { title: 'Autobiographie de Poutine', author: 'V.Poutine'}


  it('as a Librarian, i can add a book', async () => {
    const addBook = new AddBook(librarian, bookRepo)
    addBook.add(book)

    expect(bookRepo.getBook(book.title)).toEqual(book);
  });

  it('as a Member, i can\'t add a book', async () => {
    const addBook = new AddBook(member, bookRepo)
    addBook.add(book)

    expect(bookRepo.getBook(book.title)).toEqual(null);
  });

  it('as a Guest, i can\'t add a book', async () => {
    const addBook = new AddBook(guest, bookRepo)
    addBook.add(book)

    expect(bookRepo.getBook(book.title)).toEqual(null);
  });
});