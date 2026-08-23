const mylibrary = [];

function Book(name, author, pages, read){
    if(!new.target){
        throw Error(`write the new operator to use the constructor`)
    }
    this.id = crypto.randomUUID();
    this.name = name,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(name, author, pages, read){
    let book = new Book(name, author, pages, read)
    mylibrary.push(book);
}

function displayBook(){
    const container = document.querySelector(".container")
    for( const book of mylibrary ){
        const card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card)
        const title = document.createElement("h3");
        title.textContent = `${book.name}`;
        card.appendChild(title);
        const name = document.createElement("p");
        name.textContent = `${book.author}`;
        card.appendChild(name);
        const pages = document.createElement("p");
        pages.textContent = `${book.pages}`
        card.appendChild(pages);
        const read = document.createElement("p");
        if(book.read === true){
            read.textContent = `Book is already read`
            card.appendChild(read);
        }
    }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, false);
displayBook();