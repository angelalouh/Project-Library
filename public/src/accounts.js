//Account Functions:

//returns the account object that has the matching ID
function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
}

//returns sorted array of objects. the objects are sorted alphabetically by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    return accountA.name.last.toUpperCase() > accountB.name.last.toUpperCase() ? 1 : -1});
}

/*
Instruction: Returns a_number_that represents the number of times the account's ID appears in any book's 
'borrow' array. 
*/
function getTotalNumberOfBorrows(account, books) {
  const result = books.reduce((acc, book) => {
    let bookTotal = book.borrows.reduce((idCounted, borrow) => {
      if (borrow.id === account.id) {
        return idCounted + 1;
      }
      return idCounted;
    }, 0);
    return acc + bookTotal;
  }, 0);
  return result;
}

/*
With forEach Loop and reduce():
const result = books.reduce((acc, book) => {
  book.borrows.forEach(borrow => {
    if (borrow.id === accountID) {
      acc++;
    }
  });
  return acc;
}, 0);

Of note, forEach Loop will return undefined, so it should not return a value, it should mutate an 
outside value.
*/

const books = [
  {
    id: "5f447132d487bd81da01e25e",
    title: "sit eiusmod occaecat eu magna",
    genre: "Science",
    authorId: 8,
    borrows: [
      {
        id: "5f446f2e1c71888e2233621e",
        returned: false,
      },
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
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
      {
        id: "5f446f2ec32d71dabec35b06",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e7a1be21e362b82f9",
        returned: true,
      },
    ],
  },
];

const accounts = [
  {
    id: "5f446f2e1c71888e2233621e",
    picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
    age: 25,
    name: {
      first: "Esther",
      last: "Tucker",
    },
    company: "ZILLACON",
    email: "esther.tucker@zillacon.me",
    registered: "Thursday, May 28, 2015 2:51 PM",
  },
];

const authors = [
  {
    id: 8,
    name: {
      first: "Susanne",
      last: "Lawson",
    },
  },
];

//returns an array of books and authors that represent all books currently checked out by given account
//will need to use Object shorthand and spread operator to return the author object embedded in the book object
//use filter()?
//find book with account id, then check if "returned: false", if so, add book object to final array
function getBooksPossessedByAccount(account, books, authors) {
  const checkedOutBooks = books.filter(book => {
    return book.borrows.find(borrowInfo => {
      return borrowInfo.id === account.id && !borrowInfo.returned;
    });
  });
  const completeArray = checkedOutBooks.map(book => {
    const foundAuthor = authors.find(author => author.id === book.authorId);
    completeBookInfo = { ...book, author: foundAuthor};
    return completeBookInfo;
  });
  return completeArray;
}

//getBooksPossessedByAccount(accounts[0], books, authors);

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
