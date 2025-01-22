// creating the book object
export default function Book(title, author, pages, read, cover) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  if (cover === undefined || cover === "") {
    this.cover =
      "https://www.forewordreviews.com/books/covers/get-into-college.jpg"
  } else {
    this.cover = cover
  }
}
