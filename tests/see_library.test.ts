import { SeeLibrary } from '../src/use_case/see_library';
import { NedbBook } from '../src/infrastructure/dao/nedb_book';


describe('Use case: see library', () => {
  const bookRepo = new NedbBook()

  const books = [
      { title: 'Autobiographie de Poutine', author: 'V.Poutine' },
      { title: 'Le livre de la jungle', author: 'Tarzan' },
      { title: 'Le typescript pour les nuls', author: 'Dieu' }
    ]


  it('When I log in, i get the right user', async () => {
    const seeLibrary = new SeeLibrary(bookRepo)
    bookRepo.addBooks(books)

    expect(seeLibrary.see()).toEqual(books);
  });
});