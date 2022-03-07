class Book {
  constructor(public title: string, public isbn: number) {}
} // The public prefix to the constructor parameters tells
// the compiler to automatically declare and set the title and isbn members

class LibraryBook extends Book {
  private _available = true;
  // A private member can only be accessed within its own class,
  // and not externally. underscore prefix is a naming
  // convention for private members

  constructor(title: string, isbn: number) {
    super(title, isbn);
  }

  get available() {
    return this._available;
  }
  // get available value using
  // let x = book.available()
  set available(isAvailable: boolean) {
    console.log(
      `"${this.title}" is now ${isAvailable ? "available" : "unavailable"}`
    );
    this._available = isAvailable;
  }
  // set available value using
  // book.available = isAvailable (true or false)
}

class Library {
  books: LibraryBook[] = []; //list of libraryBook objects
  addBooks(...newBooks: LibraryBook[]) {
    this.books.push(...newBooks);
  }
  checkOut(book: LibraryBook) {
    book.available = false;
  }
  checkIn(book: LibraryBook) {
    book.available = true;
  }
  printBooks() {
    for (var book of this.books) {
      let { title, isbn } = book; //destructuring the LibraryBook object
      console.log(`Title: "${title}", ISBN: ${isbn}`);
    }
  }
}

var bookA = new LibraryBook(
  "Gödel, Escher, Bach: an Eternal Golden Braid",
  9780465026562
);
var bookB = new LibraryBook(
  "Structure and Interpretation of Computer Programs",
  9780262510875
);
var library = new Library();
library.addBooks(bookA, bookB);
library.printBooks();
library.checkOut(bookA);
library.checkIn(bookA);
