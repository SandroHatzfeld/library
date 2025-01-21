import "./styles.css"
import checkmark from "./assets/images/checkmark.svg"
const libraryDisplay = document.querySelector("#library")
const addBtn = document.querySelector("#addBtn")
const closeBtn = document.querySelector("#closeBtn")
const newBookWrapper = document.querySelector("#newBooksWrapper")
const addBookTitle = document.querySelector("#title")
const addBookAuthor = document.querySelector("#author")
const addBookPages = document.querySelector("#pages")
const addBookStatus = document.querySelector("#status")
const addBookCoverimage = document.querySelector("#coverImage")
const addBookSubmit = document.querySelector("#addBookSubmit")

const library = []

function Book(title, author, pages, read, cover) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.cover = cover

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
  libraryDisplay.innerHTML = ""
  library.forEach((book, index) => {
    const bookElement = document.createElement("div")
    bookElement.classList.add("book")
    bookElement.dataset.index = index
    bookElement.style.backgroundImage = book.cover

    bookElement.innerHTML = `<h2>${
      book.title
    }</h2><span class="author">Author: ${
      book.author
    }</span><br><span class="pages">Pages: ${
      book.pages
    }</span><div class="checkbox"><img class="checkmark ${
      book.read ? "read" : ""
    }" src=${checkmark}></div>`

    libraryDisplay.appendChild(bookElement)
  })
}

const book1 = new Book(
  "Der kleine Prinz",
  "Antoine de Saint-Exupéry",
  96,
  true,
  "https://lorem.picsum/150/200"
)
const book2 = new Book(
  "Stolz und Vorurteil",
  "Jane Austen",
  432,
  false,
  "https://lorem.picsum/150/200"
)
const book3 = new Book(
  "1984",
  "George Orwell",
  328,
  false,
  "https://lorem.picsum/150/200"
)
const book4 = new Book(
  "Der Name der Rose",
  "Umberto Eco",
  550,
  false,
  "https://lorem.picsum/150/200"
)
const book5 = new Book(
  "Harry Potter und der Stein der Weisen",
  "J.K. Rowling",
  309,
  true,
  "https://lorem.picsum/150/200"
)
const book6 = new Book(
  "Der Alchimist",
  "Paulo Coelho",
  197,
  true,
  "https://lorem.picsum/150/200"
)
const book7 = new Book(
  "Frankenstein",
  "Mary Shelley",
  216,
  false,
  "https://lorem.picsum/150/200"
)
const book8 = new Book(
  "Der Herr der Ringe",
  "J.R.R. Tolkien",
  1216,
  false,
  "https://lorem.picsum/150/200"
)
const book9 = new Book(
  "Alice im Wunderland",
  "Lewis Carroll",
  219,
  true,
  "https://lorem.picsum/150/200"
)
const book10 = new Book(
  "Die unendliche Geschichte",
  "Michael Ende",
  528,
  true,
  "https://lorem.picsum/150/200"
)

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

addBookSubmit.addEventListener("click", (event) => {
  event.preventDefault()
  const book = new Book(
    addBookTitle.value,
    addBookAuthor.value,
    addBookPages.value,
    addBookStatus.value,
    addBookCoverimage.value
  )
  addBookToLibrary(book)
  displayLibrary()
})

addBtn.addEventListener("click", () => {
  newBookWrapper.classList.remove("hidden")
})
closeBtn.addEventListener("click", () => {
  newBookWrapper.classList.add("hidden")
})
