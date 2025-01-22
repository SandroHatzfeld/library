import baseLibrary from "baseLibrary.js"
import Book from "book.js"
const libraryDisplay = document.querySelector("#library")
const addBtn = document.querySelector("#addBtn")
const closeBtn = document.querySelector("#closeBtn")
const newBooksWrapper = document.querySelector("#newBooksWrapper")
const newBooksForm = document.querySelector("#newBooksForm")
const newBookSubmit = document.querySelector("#newBookSubmit")
const sortingBtn = document.querySelector("#sorting")

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
newBookSubmit.addEventListener("click", (event) => {
  if (!newBooksForm.checkValidity()) {
    newBooksForm.reportValidity()
    return
  }
  const book = new Book(
    document.querySelector("#title").value,
    document.querySelector("#author").value,
    document.querySelector("#pages").value,
    document.querySelector("#status").checked,
    document.querySelector("#coverImage").value
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

sortingBtn.addEventListener("change", () => {
  switch (sortingBtn.value) {
    case "pageCountASC":
      sortPagesAsc()
      break
    case "pageCountDESC":
      sortPagesDesc()
      break
    case "titleASC":
      sortTitleAsc()
      break
    case "titleDESC":
      sortTitleDesc()
      break
    case "authorASC":
      sortAuthorAsc()
      break
    case "authorDESC":
      sortAuthorDesc()
      break
    case "unread":
      sortUnread()
      break
    case "read":
      sortRead()
      break
  }
  updateVisuals()
})

function sortTitleAsc() {
  library.sort((a, b) => a.title.localeCompare(b.title))
}
function sortTitleDesc() {
  library.sort((a, b) => b.title.localeCompare(a.title))
}
function sortAuthorAsc() {
  library.sort((a, b) => a.author.localeCompare(b.author))
}
function sortAuthorDesc() {
  library.sort((a, b) => b.author.localeCompare(a.author))
}
function sortPagesAsc() {
  library.sort((a, b) => a.pages - b.pages)
}
function sortPagesDesc() {
  library.sort((a, b) => b.pages - a.pages)
}
function sortUnread() {
  library.sort((a, b) => a.read - b.read)
}
function sortRead() {
  library.sort((a, b) => b.read - a.read)
}
