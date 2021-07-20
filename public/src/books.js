//Book Functions:

//returns the author object that has the matching ID
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

//returns the book object that has the matching ID
function findBookById(books, id) {
  return books.find(book => book.id === id);
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
      {
        id: "5f446f2ed3609b719568a415",
        returned: true,
      },
      {
        id: "5f446f2e1c71888e2233621e",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2ede05a0b1e3394d8b",
        returned: true,
      },
      {
        id: "5f446f2e4081699cdc6a2735",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2e6059326d9feb9a68",
        returned: true,
      },
      {
        id: "5f446f2e409f8883af2955dd",
        returned: true,
      },
      {
        id: "5f446f2e3900dfec59489477",
        returned: true,
      },
      {
        id: "5f446f2eae901a82e0259947",
        returned: true,
      },
    ]
  }
];

//returns array with 2 arrays inside of it. All inputted books are present in either the 1st or 2nd array. 
//1st array: contains books that have been loaned out and are not yet returned
//2nd array: contains books that have been returned. 
//of note, if first object in borrows array in books array is "returned: false", it means book is out
//Steps: create 2 arrays according to above, at the end, combine both arrays at the end via push or concat
function partitionBooksByBorrowedStatus(books) {
  const booksLoanedOut = books.filter(book => !(book.borrows[0].returned));
  const booksReturned = books.filter(book => book.borrows[0].returned);
  return allBooks = [booksLoanedOut, booksReturned];
}

//partitionBooksByBorrowedStatus(books);

const accounts = [
  {
    id: "5f446f2e2cfa3e1d234679b9",
    picture: "https://api.adorable.io/avatars/75/kristen.woods@codact.org",
    age: 23,
    name: {
      first: "Kristen",
      last: "Woods",
    },
    company: "CODACT",
    email: "kristen.woods@codact.org",
    registered: "Thursday, May 15, 2014 12:48 AM",
  },
  {
    id: "5f446f2e637138095dcc3db2",
    picture: "https://api.adorable.io/avatars/75/allen.bartlett@poshome.co.uk",
    age: 30,
    name: {
      first: "Allen",
      last: "Bartlett",
    },
    company: "POSHOME",
    email: "allen.bartlett@poshome.co.uk",
    registered: "Saturday, June 6, 2015 1:07 PM",
  },
  {
    id: "5f446f2ed3609b719568a415",
    picture: "https://api.adorable.io/avatars/75/corinne.pearson@earthwax.com",
    age: 31,
    name: {
      first: "Corinne",
      last: "Pearson",
    },
    company: "EARTHWAX",
    email: "corinne.pearson@earthwax.com",
    registered: "Tuesday, March 24, 2020 10:39 AM",
  },
  {
    id: "5f446f2e1c71888e2233621e",
    picture: "https://api.adorable.io/avatars/75/lorene.hammond@zuvy.co.uk",
    age: 22,
    name: {
      first: "Lorene",
      last: "Hammond",
    },
    company: "ZUVY",
    email: "lorene.hammond@zuvy.co.uk",
    registered: "Tuesday, September 29, 2015 11:42 AM",
  },
  {
    id: "5f446f2efa7fe184c4014dd2",
    picture:
      "https://api.adorable.io/avatars/100/sheena.castaneda@geeknet.name",
    age: 37,
    name: {
      first: "Sheena",
      last: "Castaneda",
    },
    company: "GEEKNET",
    email: "sheena.castaneda@geeknet.name",
    registered: "Monday, January 11, 2016 2:49 AM",
  },
  {
    id: "5f446f2e6059326d9feb9a68",
    picture: "https://api.adorable.io/avatars/75/gayle.banks@marketoid.org",
    age: 36,
    name: {
      first: "Gayle",
      last: "Banks",
    },
    company: "MARKETOID",
    email: "gayle.banks@marketoid.org",
    registered: "Thursday, August 22, 2019 6:30 AM",
  },
  {
    id: "5f446f2e3900dfec59489477",
    picture: "https://api.adorable.io/avatars/75/langley.henson@zoxy.org",
    age: 31,
    name: {
      first: "Langley",
      last: "Henson",
    },
    company: "ZOXY",
    email: "langley.henson@zoxy.org",
    registered: "Friday, September 9, 2016 3:48 AM",
  },
];

//return array of all transactions from the book's borrows key. Each transaction should include related
//account info and the 'returned' key
//for the book given, need to iterate through each borrow transaction of the borrows array
//final array includes each book's "returned: value" and the accompanying account id info
function getBorrowersForBook(book, accounts) {
  const bookTransactions = book.borrows;
  const accountArray = accounts.reduce((acc, account) => {
    //finding first borrow id that matches the current account id
    const foundAccount = bookTransactions.find(borrow => borrow.id === account.id);
    //if borrow id matches current account id, returns borrow info. 
    if (foundAccount != null) {
      //if foundAccount is not null or undefined and contains borrow info, the following will run:
      const completeInfo = {...foundAccount, ...account};
      acc.push(completeInfo);
      return acc;
    }
    return acc;
  }, []);
  const topTenBorrowers = accountArray.slice(0, 10);
  return topTenBorrowers;
}

//getBorrowersForBook(books[0], accounts);

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
