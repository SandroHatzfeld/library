import "./styles.css"

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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
console.log(theHobbit.info())
