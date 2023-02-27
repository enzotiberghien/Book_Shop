import { books, filteredBooks, setBooks, setFilteredBooks, displayBooks } from "../pages/booksPage.js"
import { $, $all } from "./querySelector.js"

const addFilters = () => {
  $all(".filter-book").forEach(e => e.addEventListener("change", filterBooks))
}

const filterBooks = () => {
  // Get the selected filters
  const selectedFilters = Array.from($all(".filter-book"))
    .filter(e => e.checked)
    .map(e => e.value);

  // Filter the books based on the selected filters
  setFilteredBooks(books.filter(book => selectedFilters.includes(book.category)))

  // Update the display of the books
  displayBooks(filteredBooks);
}

const addFilterByAuthors = () => {
  books.forEach(({ author }) => {
    $(".authors-menu").innerHTML += `<li><a class="dropdown-item author" href="#">${author}</a></li>`
  })
  // Add Event Listeners for filterByAuthor
  $all(".author").forEach(e => e.addEventListener("click", filterByAuthor))
}

const filterByAuthor = (event) => {
  // Remove the class "active" from all authors
  $all(".author").forEach(e => e.classList.remove("active"));

  const selectedAuthor = event.target.textContent;

  // Add the class "active" to the selected author
  event.target.classList.add("active");

  // Filter the books based on the selected filters
  setFilteredBooks(books.filter(book => book.author === selectedAuthor))

  // Update the display of the books
  if (selectedAuthor === "All") {
    displayBooks(books);
  } else displayBooks(filteredBooks);
}

export { addFilters, addFilterByAuthors }