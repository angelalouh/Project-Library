//Book Functions:

//returns the author object that has the matching ID
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

//returns the book object that has the matching ID
function findBookById(books, id) {
  return books.find(book => book.id === id);
}

//returns array with 2 arrays inside of it. All inputted books are present in either the 1st or 2nd array. 
//1st array: contains books that have been loaned out and are not yet returned
//2nd array: contains books that have been returned. 
//of note, if first object in borrows array in books array is "returned: false", it means book is out
function partitionBooksByBorrowedStatus(books) {
  const booksLoanedOut = books.filter(book => !(book.borrows[0].returned));
  const booksReturned = books.filter(book => book.borrows[0].returned);
  return allBooks = [booksLoanedOut, booksReturned];
}

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

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
