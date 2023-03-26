import { loadHome } from "./pages/home.js";
import { loadBooksPage } from "./pages/booksPage.js";
import { $, $all } from "./utils/querySelector.js";

loadHome()

$("#nav-home-btn").addEventListener("click", loadHome)
$("#nav-books-btn").addEventListener("click", loadBooksPage)
$(".start-shopping").addEventListener("click", loadBooksPage)
