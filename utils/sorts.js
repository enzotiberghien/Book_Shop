import { books, filteredBooks, setBooks, setFilteredBooks, displayBooks } from "../pages/booksPage.js"
import { $, $all } from "./querySelector.js"

const addSorts = () => {
  const sortBtns = $all(".sortBtns")
  sortBtns.forEach(e => e.addEventListener("input", sortBooks))
}


const sortBooks = (element) => {
  console.log("Btn clicked: ", element.target.id)

  switch (element.target.id) {
    case "t-asc":
      setFilteredBooks(books.sort((a, b) => {
        if (a["title"] < b["title"]) return -1;
        else if (a["title"] > b["title"]) return 1;
        else return 0
      }))
      displayBooks(filteredBooks)

      break;
    case "t-desc":
      setFilteredBooks(books.sort((a, b) => {
        if (a["title"] > b["title"]) return -1;
        else if (a["title"] < b["title"]) return 1;
        else return 0
      }))
      displayBooks(filteredBooks)

      break;
    case "p-asc":
      setFilteredBooks(books.sort((a, b) => {
        if (a["price"] < b["price"]) return -1;
        else if (a["price"] > b["price"]) return 1;
        else return 0
      }))
      displayBooks(filteredBooks)

      break;
    case "p-desc":
      setFilteredBooks(books.sort((a, b) => {
        if (a["price"] > b["price"]) return -1;
        else if (a["price"] < b["price"]) return 1;
        else return 0
      }))
      displayBooks(filteredBooks)

      break;
    default:
      break;
  }
}


export { addSorts }