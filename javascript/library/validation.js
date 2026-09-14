const author = document.getElementById("author");
const bookName = document.getElementById("title");
const bookPages = document.getElementById("pages");

function validateAuthor() {
  if (author.validity.valueMissing) {
    author.setCustomValidity("The author name must be filled!");
  } else if (bookName.validity.tooShort) {
    author.setCustomValidity("The author name is too short");
  } else {
    author.setCustomValidity("");
  }
}

function validateTitle() {
  if (bookName.validity.valueMissing) {
    bookName.setCustomValidity("The Title name must be filled!");
  } else if (bookName.validity.tooShort) {
    bookName.setCustomValidity("The Title name is too short");
  } else {
    bookName.setCustomValidity("");
  }
}

function validatePages() {
  if (bookPages.validity.valueMissing) {
    bookPages.setCustomValidity("Pages must be included");
  } else if (bookPages.validity.rangeUnderflow) {
    bookPages.setCustomValidity("Pages number must be higher than this");
  } else if (bookPages.validity.rangeOverflow) {
    bookPages.setCustomValidity("Pages number must be lower than this");
  } else {
    bookPages.setCustomValidity("");
  }
}
