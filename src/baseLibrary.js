import Book from "./book"

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

const book5 = new Book(
  "Der Alchimist",
  "Paulo Coelho",
  197,
  true,
  "https://m.media-amazon.com/images/I/61IRCUvPQVL.jpg"
)
const book6 = new Book(
  "Frankenstein",
  "Mary Shelley",
  216,
  false,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Frankenstein_poster_1931.jpg/640px-Frankenstein_poster_1931.jpg"
)
const book7 = new Book(
  "Der Herr der Ringe",
  "J.R.R. Tolkien",
  1216,
  false,
  "https://m.media-amazon.com/images/I/81r7sjdm5ML._AC_UF894,1000_QL80_.jpg"
)
const book8 = new Book(
  "Alice im Wunderland",
  "Lewis Carroll",
  219,
  true,
  "https://images.thalia.media/-/BF2000-2000/13c5d43fbfcd40c297925e6114878c93/alice-im-wunderland-dvd-johnny-depp.jpeg"
)
const book9 = new Book(
  "Die unendliche Geschichte",
  "Michael Ende",
  528,
  true,
  "https://michaelende.de/sites/default/files/Unendliche%20Geschichte_6.jpg"
)

export default baseLibrary = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
]
