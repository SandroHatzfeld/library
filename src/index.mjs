import baseLibrary from "./baseLibrary"
import Book from "./book"
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

function addBookToLibrary(book) {
  if (Array.isArray(book)) {
    book.forEach((element) => {
      library.push(element)
    })
  } else {
    library.push(book)
  }
  updateVisuals()
}

addBookToLibrary(baseLibrary)

// eventlisteners for adding a new book
addBookSubmit.addEventListener("click", (event) => {
  if (!newBooksForm.checkValidity()) {
    newBooksForm.reportValidity()
    return
  }
  const book = new Book(
    addBookTitle.value,
    addBookAuthor.value,
    addBookPages.value,
    addBookStatus.checked,
    addBookCoverimage.value
  )
  addBookToLibrary(book)
})

// eventlisteners for opening and closing the form
addBtn.addEventListener("click", () => {
  newBooksWrapper.showModal()
})
closeBtn.addEventListener("click", () => {
  newBooksWrapper.close()
})

// removing books and updating the visuals
function removeBookVisual(index) {
  library.splice(index, 1)
  updateVisuals()
}

// updating the read status and the visuals
function updateReadStatus(index) {
  library[index].read = !library[index].read
  updateVisuals()
}

// add new books by duplicating the template html-node
// use fragment to render the object correctly
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
  if (book.pages !== "") {
    bookTemplate.querySelector(".pages").innerHTML = `Pages: ${book.pages}`
  }

  fragment.appendChild(bookTemplate)
  libraryDisplay.appendChild(fragment)
}

// clear the library and rerender all elements
function updateVisuals() {
  libraryDisplay.innerHTML = ""
  library.forEach((book, index) => {
    addBookVisual(book, index)
  })
}
