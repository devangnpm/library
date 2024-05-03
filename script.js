const newBookDialog = document.getElementById('newBookDialog');
const addNewBookButton = document.getElementById('addNewBook');
const dialogCloseBtn = document.getElementById('close');
const dialogAddBtn = document.getElementById('btn-Add');
const myLibrary =[]; 

// this is Book Constructor func//
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

// this is initial book or test book creation using Obj constructor and pushing into the myLib arr//
const theHobbit = new Book('The Hobbit','J.R.R Tolkien','295','not read');
myLibrary.push(theHobbit);
console.log(theHobbit);

console.log(theHobbit.info());


dialogAddBtn.addEventListener('click', function addBookToLibrary() {  // function takes inputs and creates a new book Object //
    let getBookTitle = prompt("Title");
    let getBookAuthor = prompt("Author");
    let getBookPages = prompt ("Pages");
    let getBookRead  = prompt("read or not read")

    
    const bookObject = new Book(getBookTitle,getBookAuthor,getBookPages,getBookRead);
    myLibrary.push(bookObject);

    displayBookOnCard([bookObject]);
});

/*const myBook = addBookToLibrary();   
console.log('First Book',myLibrary[0]);
console.log('Second Book',myLibrary[1]);
*/


addNewBookButton.addEventListener('click', () => {          //Event handling for add new book button//
    console.log('button clicked');
    newBookDialog.showModal();
    newBookDialog.classList.add('open');
    
});

dialogCloseBtn.addEventListener('click', () => {
    newBookDialog.close();
    newBookDialog.classList.remove('open');
});

displayBookOnCard(myLibrary);

function displayBookOnCard(books) {
    books.forEach(book => {
        const newBook = document.createElement('div');
        newBook.classList.add('book'); 

        const titleParagraph = document.createElement('p');
        titleParagraph.textContent = book.title;
        titleParagraph.classList.add('header-p');

        const authorParagraph = document.createElement('p');
        authorParagraph.textContent = book.author;

        const pagesParagraph = document.createElement('p');
        pagesParagraph.textContent = book.pages;

         const sliderLabel = document.createElement('label');
        sliderLabel.classList.add('switch');
        const sliderInput = document.createElement('input');
        sliderInput.setAttribute('type', 'checkbox');
        const sliderSpan = document.createElement('span');
        sliderSpan.classList.add('slider', 'round');
        sliderLabel.appendChild(sliderInput);
        sliderLabel.appendChild(sliderSpan);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.setAttribute('id', 'remove');

        
        newBook.appendChild(titleParagraph);
        newBook.appendChild(authorParagraph);
        newBook.appendChild(pagesParagraph);
        newBook.appendChild(sliderLabel);
        newBook.appendChild(removeButton);

        const booksContainer = document.querySelector('.books');
        booksContainer.appendChild(newBook);

    });
}

console.log(myLibrary);

