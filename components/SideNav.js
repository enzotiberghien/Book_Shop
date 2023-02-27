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
  <input type="range" class="form-range" min="0" max="2000" step="10" id="customRange3"
    oninput="
      var range1 = document.getElementById('customRange3');
      var range2 = document.getElementById('customRange4');
      var minPrice = Math.min(parseInt(range1.value), parseInt(range2.value));
      var maxPrice = Math.max(parseInt(range1.value), parseInt(range2.value));
      var priceText = minPrice.toString() + ' SEK - ' + maxPrice.toString() + ' SEK';
      document.getElementById('price').innerHTML = priceText;
    ">
  <input type="range" class="form-range" min="0" max="2000" step="10" id="customRange4"
    oninput="
      var range1 = document.getElementById('customRange3');
      var range2 = document.getElementById('customRange4');
      var minPrice = Math.min(parseInt(range1.value), parseInt(range2.value));
      var maxPrice = Math.max(parseInt(range1.value), parseInt(range2.value));
      var priceText = minPrice.toString() + ' SEK - ' + maxPrice.toString() + ' SEK';
      document.getElementById('price').innerHTML = priceText;
    ">
  <div id="price">0 SEK - 2000 SEK</div>


  <hr class="my-5">

  <h5 class="">Sort By</h5>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    <label class="form-check-label" for="flexRadioDefault1">
      Title Ascending
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
      Title Descending
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
      Price Ascending
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
    <label class="form-check-label" for="flexRadioDefault2">
      Price Ascending
    </label>
  </div>
</div>
  `
}

export { SideNav }