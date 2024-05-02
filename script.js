const newBookDialog = document.getElementById('newBookDialog');
const addNewBookButton = document.getElementById('addNewBook');
const dialogCloseBtn = document.getElementById('close');



/*
const myLibrary =[];


function Book(title,author,pages,isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = isRead;
    this.info = function () {
        let readStatus = this.isRead ? "read" : "not read";
        let info = `${this.title} by ${this.author}, ${this.pages} pages ${this.read} yet`;
        return info;
    }
}

const theHobbit = new Book('The Hobbit','J.R.R Tolkien','295','not read');
myLibrary.push(theHobbit);
console.log(theHobbit);

console.log(theHobbit.info());


function addBookToLibrary() {
    let getBookTitle = prompt("Title");
    let getBookAuthor = prompt("Author");
    let getBookPages = prompt ("Pages");
    let getBookRead  = prompt("read or not read")

    
    const bookObject = new Book(getBookTitle,getBookAuthor,getBookPages,getBookRead);
    myLibrary.push(bookObject);

    return bookObject;
}

const myBook = addBookToLibrary();
console.log('First Book',myLibrary[0]);
console.log('Second Book',myLibrary[1]);
*/


addNewBookButton.addEventListener('click', () => {          //Event handling for add new book button//
    newBookDialog.showModal();
    newBookDialog.classList.add('open');
    
});

dialogCloseBtn.addEventListener('click', () => {
    newBookDialog.close();
    newBookDialog.classList.remove('open');
});