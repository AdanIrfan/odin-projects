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

Book.prototype.toggleRead = function(){
    if(this.read === true){
        this.read = false;
        displayBook();
    }
    else{
        this.read = true;
        displayBook();
    }
}

function addBookToLibrary(name, author, pages, read){
    let book = new Book(name, author, pages, read)
    mylibrary.push(book);
}

function displayBook(){
    const container = document.querySelector(".container")
    container.textContent = "";
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
        const toggleBtn = document.createElement("button");
        if(book.read === true){
            toggleBtn.textContent = `Read`;
        }
        else{
            toggleBtn.textContent = `UnRead`;
        }
        toggleBtn.addEventListener("click", () =>{ 
            book.toggleRead();
        });
        card.appendChild(toggleBtn);
        const id = book.id;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () =>{
            const index = mylibrary.findIndex((book) => book.id == id);
            mylibrary.splice(index,1);
            displayBook();   
        })
        card.appendChild(removeBtn);
    }
}

const openbtn = document.getElementById("openbtn");
const dialog = document.getElementById("dialog");
const closebtn = document.getElementById("closebtn");
const submitbtn = document.getElementById("submitbtn");

openbtn.addEventListener("click", ()=> dialog.showModal());
closebtn.addEventListener("click", ()=> dialog.close());
submitbtn.addEventListener("click", (e) =>{
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    let read = document.querySelector("input[name = read]:checked").value;
    if(read === 'yes'){
        read = true;
    }
    else{
        read = false;
    }
    addBookToLibrary(title, author, Number(pages), read);
    dialog.close();
    displayBook();
})


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("The Alchemist", "Paulo Coelho", 208, false);
displayBook();