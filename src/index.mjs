const libraryDisplay = document.querySelector("#library")
const addBtn = document.querySelector("#addBtn")
const closeBtn = document.querySelector("#closeBtn")
const newBooksWrapper = document.querySelector("#newBooksWrapper")
const newBooksForm = document.querySelector("#newBooksForm")
const addBookTitle = document.querySelector("#title")
const addBookAuthor = document.querySelector("#author")
const addBookPages = document.querySelector("#pages")
const addBookStatus = document.querySelector("#status")
const addBookCoverimage = document.querySelector("#coverImage")
const addBookSubmit = document.querySelector("#addBookSubmit")

const library = []

// creating the book object
function Book(title, author, pages, read, cover) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.cover = cover
}

const book1 = new Book(
  "Der kleine Prinz",
  "Antoine de Saint-Exupéry",
  96,
  true,
  "https://www.heel-verlag.de/cosmoshop/default/pix/a/g/9783755300281.3.jpg"
)
const book2 = new Book(
  "Stolz und Vorurteil",
  "Jane Austen",
  432,
  false,
  "https://m.media-amazon.com/images/I/81Q-XHEQjAL._UF1000,1000_QL80_.jpg"
)
const book3 = new Book(
  "1984",
  "George Orwell",
  328,
  false,
  "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg"
)
const book4 = new Book(
  "Der Name der Rose",
  "Umberto Eco",
  550,
  false,
  "https://upload.wikimedia.org/wikipedia/de/thumb/5/5a/Der_Name_der_Rose_-_Hanser_1982.jpg/1200px-Der_Name_der_Rose_-_Hanser_1982.jpg"
)

const book6 = new Book(
  "Der Alchimist",
  "Paulo Coelho",
  197,
  true,
  "https://m.media-amazon.com/images/I/61IRCUvPQVL.jpg"
)
const book7 = new Book(
  "Frankenstein",
  "Mary Shelley",
  216,
  false,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Frankenstein_poster_1931.jpg/640px-Frankenstein_poster_1931.jpg"
)
const book8 = new Book(
  "Der Herr der Ringe",
  "J.R.R. Tolkien",
  1216,
  false,
  "https://m.media-amazon.com/images/I/81r7sjdm5ML._AC_UF894,1000_QL80_.jpg"
)
const book9 = new Book(
  "Alice im Wunderland",
  "Lewis Carroll",
  219,
  true,
  "https://images.thalia.media/-/BF2000-2000/13c5d43fbfcd40c297925e6114878c93/alice-im-wunderland-dvd-johnny-depp.jpeg"
)
const book10 = new Book(
  "Die unendliche Geschichte",
  "Michael Ende",
  528,
  true,
  "https://michaelende.de/sites/default/files/Unendliche%20Geschichte_6.jpg"
)

function addBookToLibrary(book) {
  library.push(book)
  updateVisuals()
}

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)
addBookToLibrary(book4)
addBookToLibrary(book6)
addBookToLibrary(book7)
addBookToLibrary(book8)
addBookToLibrary(book9)
addBookToLibrary(book10)

addBookSubmit.addEventListener("click", (event) => {
  if (!newBooksForm.checkValidity()) {
    newBooksForm.reportValidity()
    return
  }
  event.preventDefault()
  const book = new Book(
    addBookTitle.value,
    addBookAuthor.value,
    addBookPages.value,
    addBookStatus.value,
    addBookCoverimage.value === ""
      ? "https://www.forewordreviews.com/books/covers/get-into-college.jpg"
      : addBookCoverimage.value
  )
  addBookToLibrary(book)
  newBooksWrapper.classList.add("hidden")
})

addBtn.addEventListener("click", () => {
  newBooksWrapper.classList.remove("hidden")
})
closeBtn.addEventListener("click", () => {
  newBooksWrapper.classList.add("hidden")
})

function removeBookVisual(index) {
  library.splice(index, 1)
  updateVisuals()
}

function updateReadStatus(index) {
  library[index].read = !library[index].read
  updateVisuals()
}
function addBookVisual(book, index) {
  const fragment = document.createDocumentFragment()

  // selects template content and add classes/background images
  const bookTemplate = document
    .querySelector("#bookTemplate")
    .content.cloneNode(true)
  const bookElement = bookTemplate.querySelector(".book")
  bookElement.dataset.index = index
  bookElement.style.backgroundImage = `url("${book.cover}"`

  // Add eventlisteners for removing the book element
  bookTemplate
    .querySelector(".removeBtn")
    .addEventListener("click", (event) => {
      const bookIndex = event.currentTarget.closest(".book").dataset.index
      removeBookVisual(bookIndex)
    })

  // Add eventlisteners for the checkbox
  bookTemplate.querySelector(".checkbox").addEventListener("click", (event) => {
    const bookIndex = event.currentTarget.closest(".book").dataset.index
    updateReadStatus(bookIndex)
  })

  if (book.read) {
    bookTemplate.querySelector(".checkmark").classList.add("read")
  }

  bookTemplate.querySelector("h2").innerHTML = book.title
  bookTemplate.querySelector(".author").innerHTML = `Author: ${book.author}`
  bookTemplate.querySelector(".pages").innerHTML = `Pages: ${book.pages}`

  fragment.appendChild(bookTemplate)
  libraryDisplay.appendChild(fragment)
}

function updateVisuals() {
  libraryDisplay.innerHTML = ""
  library.forEach((book, index) => {
    addBookVisual(book, index)
  })
}
