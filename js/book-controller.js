'use strict';

function onInit() {
    createBooks()
    renderBooks()
}

function renderBooks() {
    var books = getBooks()
    var strHtmls = books.map(function (book) {
        return `
        <tr><td>${book.id}</td><td>${book.name}</td><td>${book.price}</td>
        <td><button class="read" onclick="onReadBook('${book.id}')">Read</button>
         <button class="update" onclick="onUpdateBook('${book.id}')">Update</button><button class="remove" 
         onclick="onRemoveBook('${book.id}')">Remove</button></td> 
         <div class="details-modal">Descraption:${book.desc}<img src=""></div>
        `
    })
    document.querySelector('tbody').innerHTML = strHtmls.join('')
    //document.querySelector('.btn-next').hidden = !hasNext()
}


function onRemoveBook(bookId) {
    RemoveBook(bookId)
    renderBooks()
}

function onAddBook(){
    var elName = document.querySelector('input[name=name]');
    var elPrice = document.querySelector('input[name=price]');
    var name = elName.value;
    var price = +elPrice.value;
    addBook(name, price)
    elName .value = '';
    elPrice.value = '';
    renderBooks()
}

function onUpdateBook(bookId){
    var newPrice = +prompt('Price?');
    updateBook(bookId, newPrice);
    renderBooks();
}


function onReadBook (bookId){
    var elRead = document.querySelector('.details-modal');
    elRead.style.display = 'flex';
}