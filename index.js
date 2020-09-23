import {books} from "./books.js";



function createListOfBooks(books) {

    const bookListSection = document.querySelector("#list");
    const title = document.createElement("h2");
    const titleText = document.createTextNode("Suggested Reading");
    const booksDiv = document.createElement("div");

    books.map((book) => {
        const bookDivItem = document.createElement("div");
        bookDivItem.className = "book";
    
        const bookImage = document.createElement("img");
        bookImage.src = book.image;
        bookImage.alt = book.name;
    
        const bookContentDiv = document.createElement("div");
        const bookTitle = document.createElement("h2");
        bookTitle.title = book.name;
    
        const bookAuthor = document.createElement("p");
        bookAuthor.className = "author";
        bookAuthor.textContent = book.author;
    
        const bookPrice = document.createElement("p");
        bookPrice.className = "price";
        bookPrice.textContent = book.price;
    
        const bookDescription = document.createElement("summary");
        bookDescription.className = "description";
        bookDescription.textContent = book.description;
    
        const buttonDiv = document.createElement("div");
        const addBookbtn = document.createElement("button");
        addBookbtn.className = "addbtn"; 
    
        bookContentDiv.appendChild(bookTitle);
        bookContentDiv.appendChild(bookAuthor);
        bookContentDiv.appendChild(bookPrice);
        bookContentDiv.appendChild(bookDescription);
    
        bookDivItem.appendChild(bookImage);
        bookDivItem.appendChild(bookContentDiv);
        buttonDiv.appendChild(addBookbtn);
        bookDivItem.appendChild(buttonDiv);
        booksDiv.appendChild(bookDivItem);
        
    });
    
    title.appendChild(titleText);
    bookListSection.appendChild(title);
    bookListSection.appendChild(booksDiv);

}

createListOfBooks(books)
