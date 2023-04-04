import { getJSON } from "../utils/getJSON.js";
import { ShoppingCart, addEventsToCart, addToCart } from "../components/ShoppingCart.js"
import { SideNav } from "../components/SideNav.js";
import { $, $all } from "../utils/querySelector.js";
import { Book } from "../components/Book.js";
import { Modal } from "../components/Modal.js";
import { addFilters, addFilterByAuthors, addFilterByPrice } from "../utils/filters.js";
import { addSorts } from "../utils/sorts.js";

// Books State
let books = [];
const setBooks = (value) => books = value

// FilteredBooks State
let filteredBooks = [];
const setFilteredBooks = (value) => filteredBooks = value


const start = async () => {
  books = await getJSON('./books.json');
  displayBooks(books);
  addFilters()
  addFilterByAuthors()
  addEventsToCart()
  addFilterByPrice()
  addSorts()
}


const displayBooks = (booksArr) => {
  let html = '';
  booksArr.map((book) => {
    html += `
      ${Book(book)}
      ${Modal(book)}
    `;
  });

  $('#books-row').innerHTML = html;

  // Add EventListener to addToCart btn
  $all('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
      const bookId = button.dataset.book;
      addToCart(booksArr.find(book => String(book["id"]) === bookId));
    });
  });
}


const loadBooksPage = () => {
  $('main').innerHTML = `
    ${ShoppingCart()} 
    <section class="d-flex py-3">
      ${SideNav()}
      <div id="books-container" class="container rounded m-2">
        <div id="books-row" class="row text-center g-3 flex-row justify-content-center"></div>
      </div>
    </section>
  `;

  start()
}


export { loadBooksPage, books, setBooks, filteredBooks, setFilteredBooks, displayBooks }