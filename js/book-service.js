'use strict';
const KEY = 'books';
var gBooks;
var gPageIdx = 0;
const PAGE_SIZE = 10;

function createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = []
        for (let i = 0; i < 10; i++) {
            var price = getRandomIntInclusive(1, 20)
            var name = 'book' + i;
            books.push(_createBook(name,price))
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _createBook(name, price) {
    if (!price) price = getRandomIntInclusive(1, 20)
    return {
        id: makeId(),
        name: name,
        price: price,
        desc: makeLorem()
    }
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}


function RemoveBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();

}


function addBook(name, price){
    var book = _createBook(name, price)
    gBooks.unshift(book)
    _saveBooksToStorage();_saveBooksToStorage();
}


function updateBook(bookId, newPrice){
    var book = gBooks.find(function(book){
        return book.id === bookId;
    })
    book.price = newPrice;
    _saveBooksToStorage();
}

function getBookById(bookId) {
    var book = gCars.find(function (book) {
        return carId === book.id
    })
    return book;
}

function getBooks() {
    var startIdx = gPageIdx*PAGE_SIZE;
    return gBooks.slice(startIdx, startIdx + PAGE_SIZE)
}