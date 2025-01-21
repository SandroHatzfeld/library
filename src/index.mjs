import "./styles.css"
const libraryDisplay = document.querySelector("#library")
const fragment = document.createDocumentFragment()
const library = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read

  this.info = () => {
    return `${this.title} by ${this.author} has ${this.pages} pages, you ${
      this.read ? "already read it" : "didn't read it"
    }.`
  }
}

function addBookToLibrary(book) {
  library.push(book)
}

function displayLibrary() {
  library.forEach((book) => {
    const bookElement = document.createElement("div")
    bookElement.classList.add("book")

    bookElement.innerHTML = `<h2>${book.title}</h2><span>${
      book.author
    }</span><br><span>Pages: ${book.pages}</span><div class="checkbox ${
      book.read ? "read" : ""
    }"></div>`

    libraryDisplay.appendChild(bookElement)
  })
}

const book1 = new Book("Der kleine Prinz", "Antoine de Saint-Exupéry", 96, true)
const book2 = new Book("Stolz und Vorurteil", "Jane Austen", 432, false)
const book3 = new Book("1984", "George Orwell", 328, false)
const book4 = new Book("Der Name der Rose", "Umberto Eco", 550, false)
const book5 = new Book(
  "Harry Potter und der Stein der Weisen",
  "J.K. Rowling",
  309,
  true
)
const book6 = new Book("Der Alchimist", "Paulo Coelho", 197, true)
const book7 = new Book("Frankenstein", "Mary Shelley", 216, false)
const book8 = new Book("Der Herr der Ringe", "J.R.R. Tolkien", 1216, false)
const book9 = new Book("Alice im Wunderland", "Lewis Carroll", 219, true)
const book10 = new Book("Die unendliche Geschichte", "Michael Ende", 528, true)

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book5)
addBookToLibrary(book6)
addBookToLibrary(book7)
addBookToLibrary(book8)
addBookToLibrary(book9)
addBookToLibrary(book10)

displayLibrary()
