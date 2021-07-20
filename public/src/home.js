//Home Functions:

//returns a number that represents the number of book objects inside of the array
//use reduce()
function getTotalBooksCount(books) {
  return books.length;
}

//returns number that represents the number of account objects inside of the array
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

/*return number that represents the number of books that are currently checked out. 
Check the first transaction in the borrows key of each book. If transaction says
'returned: false', the books is currently checked out.*/
function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    return !book.borrows[0].returned ? acc + 1 : acc;
  }, 0);
}

const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e2cfa3e1d234679b9",
        returned: false,
      },
    ],
  },
  {
    id: "5f4471329627160be1e8ce92",
    title: "esse ea veniam non occaecat",
    genre: "Classics",
    authorId: 10,
    borrows: [
      {
        id: "5f446f2ed3609b719568a415",
        returned: false,
      },
    ],
  },
  {
    id: "5f44713264bb872240dd62d0",
    title: "proident cupidatat fugiat aliquip do",
    genre: "Young Adult",
    authorId: 20,
    borrows: [
      {
        id: "5f446f2efa7fe184c4014dd2",
        returned: false,
      },
    ],
  },
  {
    id: "5f44713265e5d8d17789beb0",
    title: "tempor occaecat fugiat",
    genre: "Travel",
    authorId: 16,
    borrows: [
      {
        id: "5f446f2e4eff1030e7316861",
        returned: true,
      },
    ],
  },
  {
    id: "5f447132075cb9ebf2f72def",
    title: "exercitation consectetur quis duis aliquip",
    genre: "Young Adult",
    authorId: 11,
    borrows: [
      {
        id: "5f446f2e637138095dcc3db2",
        returned: false,
      },
    ],
  },
  {
    id: "5f4471327864ee880caf5afc",
    title: "reprehenderit quis laboris adipisicing et",
    genre: "Poetry",
    authorId: 20,
    borrows: [
      {
        id: "5f446f2e2a4fcd687493a775",
        returned: false,
      },
      {
        id: "5f446f2ebe8314bcec531cc5",
        returned: true,
      },
      {
        id: "5f446f2ea508b6a99c3e42c6",
        returned: true,
      },
    ],
  },
];

/* returns array containing 5 objects or fewer that represent the most common occurring
genres, ordered from most common to least. Each object in the returned array has two keys:
  - 'name' key that represents the name of the genre
  - 'count' key that represents the number of times the genre occurs
If more than 5 genres are present, only the top 5 should be returned.
 */

//helper function for getMostCommonGenres
function countGenres(books) {
  return books.reduce((acc, book) => {
    const existingGenre = acc.find(genre => genre.name.includes(book.genre));
    if (existingGenre != null) {
      existingGenre.count++;
      return acc;
    }
    const genreObj = {name: book.genre, count: 1};
    acc.push(genreObj);
    return acc;
  }, []);
}

//helper function
function getTopFive(array) {
  return array.slice(0, 5);
}

function getMostCommonGenres(books) {
  const genreArray = countGenres(books);
  const sortedGenres = genreArray.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1);
  const topGenres = getTopFive(sortedGenres);
  return topGenres;
}

//getMostCommonGenres(books);

/*returns array containing 5 obj or fewer that represent the most popular books in
the library. Popularity = # of times book has been borrowed. Each obj has 2 keys:
  1. 'name' key = title of book
  2. 'count' key = # of times book has been borrowed
# of times book has been borrowed = books.borrows.length
use reduce()
*/
function getMostPopularBooks(books) {
  const bookArray = books.reduce((acc, book) => {
    const bookObj = {name: book.title, count: book.borrows.length};
    acc.push(bookObj);
    return acc;
  }, []);
  const sortedBooks = bookArray.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1);
  return getTopFive(sortedBooks);
}

//getMostPopularBooks(books);

const authors = [
  {
    id: 8,
    name: {
      first: "Susanne",
      last: "Lawson",
    },
  },
  {
    id: 10,
    name: {
      first: "Giles",
      last: "Barlow",
    },
  },
  {
    id: 11,
    name: {
      first: "Luz",
      last: "Beach",
    },
  },
  {
    id: 20,
    name: {
      first: "Tate",
      last: "Fletcher",
    },
  },
];

/*
- Returns array containing 5 obj or fewer that represent most popular authors whose
books have been checked out the most. 
- Popularity = finding all books written by author and adding up # of times books have
been borrowed. 
- Each Obj in the returned array has 2 keys:
  1. 'name' key = first and last name of author
  2. 'count' key = # of times the author's books have been borrowed
- Use getTopFive()
*/
function getMostPopularAuthors(books, authors) {
  const bookArray = books.reduce((acc, book) => {
    let existingAuthorID = acc.find(object => object.id === book.authorId);
    if (existingAuthorID != null) {
      existingAuthorID.count = existingAuthorID.count + book.borrows.length;
      return acc;
    }
    const newObj = {id: book.authorId, count: book.borrows.length};
    acc.push(newObj);
    return acc;
  }, []);
  const authorsArray = authors.reduce((acc, author) => {
    const matchedAuthor = acc.find(object => object.id === author.id);
    const { name: {first, last} } = author;
    const name = first.concat(' ', last);
    const completeInfo = { name, count: matchedAuthor.count};
    acc[acc.indexOf(matchedAuthor)] = completeInfo;
    return acc;
  }, bookArray);
  const sortedAuthors = authorsArray.sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1);
  return getTopFive(sortedAuthors);
}

//getMostPopularAuthors(books, authors);

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
