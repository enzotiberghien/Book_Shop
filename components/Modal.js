const Modal = (book) => {
  return `
  <div class="modal fade" id="modal-${book["id"]}" tabindex="-1" role="dialog" aria-labelledby="modal-${book["id"]}-label" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-5">
                    <img src="${book["coverImage"]}" alt="" class="img-fluid rounded d-none d-md-block">
                  </div>
                  <div class="col-md-7 d-flex flex-column justify-content-around">
                    <h5 class="modal-title" id="modal-${book["id"]}-label">${book["title"]}</h5>
                    <h6 class="text-secondary">${book["author"]}</h6>
                    <p class="modal-description desc">${book["description"]}</p>
                    <p class="modal-description">${book["price"]}0 SEK</p>
                    <div class="">
                      <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                      <a href="" class="btn btn-primary">Add to Cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  `
}

export { Modal }