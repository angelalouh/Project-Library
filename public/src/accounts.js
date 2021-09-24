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
Of note, forEach Loop will return undefined, so it should not return a value, it should mutate an 
outside value.
*/

//returns an array of books and authors that represent all books currently checked out by given account
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

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
