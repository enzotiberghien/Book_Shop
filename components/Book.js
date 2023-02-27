const Book = (book) => {
  return `
  <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6">
        <div class="card h-100 bg-light">
          <img src="${book["coverImage"]}" alt="" class="card-img-top">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title mb-2">${book["title"]}</h5>
            <h6 class="text-secondary">${book["author"]}</h6>
            <p class="card-text">${book["price"]} SEK</p>
            <div class="mt-auto">
              <button type="button" class="btn btn-warning btn-sm mr-2 mt-2" data-toggle="modal" data-target="#modal-${book["id"]}">
                Read More
              </button>
              <a href="javascript:void(0)" class="btn btn-primary btn-sm mt-2 add-cart" data-book="${book["id"]}">Add to Cart</a>
              </div>
          </div>
        </div>
      </div>
  `
}

export { Book }