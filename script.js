




const myLibrary =['theHobbit'];



function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let info = title+' by '+author+','+pages+' '+'pages'+' '+read+' '+'yet';
        return info;
    }
}

const theHobbit = new Book('The Hobbit','J.R.R Tolkien','295','not read');
console.log(theHobbit);

console.log(theHobbit.info());