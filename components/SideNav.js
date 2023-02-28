const SideNav = () => {
  return `
  <div id="side-menu" class="container text-dark m-2 rounded border-right h-100">
  <h2 class="mb-5">Books</h2>
  <h5 class="">Category</h5>
  <div class="form-check">
    <input class="form-check-input filter-book" type="checkbox" checked value="UX" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      UX
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input filter-book" type="checkbox" checked value="HTML" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      HTML
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input filter-book" type="checkbox" checked value="CSS" id="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked">
      CSS
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input filter-book" type="checkbox" checked value="JavaScript" id="flexCheckChecked">
    <label class="form-check-label" for="flexCheckChecked">
      JavaScript
    </label>
  </div>

  <hr class="my-5">

  <h5 class="">Author</h5>
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
      aria-expanded="false">
      Select Author
    </button>
    <ul class="dropdown-menu authors-menu">
      <li><a class="dropdown-item author active" href="#">All</a></li>
    </ul>
  </div>

  <hr class="my-5">

  <h5 class="">Price</h5>
  <label for="customRange3" class="form-label">Price Range (SEK): </label>
  <input type="range" class="form-range price-range" value="0" id="min-price" min="0" max="1500" step="10">
  <input type="range" class="form-range price-range" value="1500" id="max-price" min="0" max="1500" step="10">
  <div id="price">0 SEK - 1500 SEK</div>


  <hr class="my-5">

  <h5 class="">Sort By</h5>
  <div class="form-check">
    <input class="form-check-input sortBtns title-ascending" type="radio" name="flexRadioDefault" id="t-asc">
    <label class="form-check-label" for="t-asc">
      Title Ascending
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input sortBtns title-descending" type="radio" name="flexRadioDefault" id="t-desc" checked>
    <label class="form-check-label" for="t-desc">
      Title Descending
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input sortBtns price-ascending" type="radio" name="flexRadioDefault" id="p-asc" checked>
    <label class="form-check-label" for="p-asc">
      Price Ascending
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input sortBtns price-descending" type="radio" name="flexRadioDefault" id="p-desc" checked>
    <label class="form-check-label" for="p-desc">
      Price Descending
    </label>
  </div>
</div>
  `
}

export { SideNav }