class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log(this.name + "is a person");
  }
}

class Member extends Person {
  borrowedBook: book[] = [];
  constructor(name: string) {
    super(name);
  }

  borrowbook(book: book, library: library) {
    let index = -1;
    for (let i = 0; i < library.books.length; i++) {
      if (library.books[i].title === book.title) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      this.borrowedBook.push(book);
      library.books.splice(index, 1);
      console.log(`${book.title} is borrowed by ${this.name}`);
    } else {
      console.log(`${book.title} is not available in the library.`);
    }
  }

  returnbook(book: book, library: library) {
    let index = -1;
    for (let i = 0; i < library.books.length; i++) {
      if (library.books[i].title === book.title) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      this.borrowedBook.splice(index, 1);
      library.books.push(book);
      console.log(`${book.title} is returned by ${this.name}`);
    } else {
      console.log(`${book.title} was not borrowed by ${this.name}.`);
    }
  }

  displayRole(): void {
    console.log(this.name + " is a member of the library");
  }
}

class librarian extends Person {
  constructor(name: string) {
    super(name);
  }

  displayRole(): void {
    console.log(this.name + " is librarian of library");
  }
}

class book {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

class library {
  books: book[] = [];
  librarian: librarian;
  member: Member[] = [];

  constructor(librarian: librarian) {
    this.librarian = librarian;
  }

  addbook(book: book) {
    this.books.push(book);
    console.log(
      `${book.title} by ${book.author} has been added to the library`
    );
  }

  displaybooks(): void {
    console.log("Books in the library:");
    this.books.forEach((book, index) =>
      console.log(`${index + 1}. ${book.title} by ${book.author}`)
    );
  }

  addmember(member: Member) {
    this.member.push(member);
    console.log(`${member.name} has been added as a library member.`);
  }
}

const varun = new librarian("varun");

const ziyadh = new Member("ziyadh");
const arun = new Member("arun");

const rich_dad_poor_dad = new book("Rich Dad Poor Dad", "Robert T.Kiyosaki");
const you_can_win = new book("You can Win", "Shiv Khera");

const newLibrary = new library(varun);

newLibrary.addbook(rich_dad_poor_dad);
newLibrary.addbook(you_can_win);

newLibrary.displaybooks();
arun.borrowbook(rich_dad_poor_dad, newLibrary);
ziyadh.borrowbook(rich_dad_poor_dad, newLibrary);
arun.returnbook(rich_dad_poor_dad, newLibrary);
ziyadh.borrowbook(rich_dad_poor_dad, newLibrary);
newLibrary.displaybooks();
