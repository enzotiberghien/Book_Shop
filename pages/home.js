const loadHome = () => {
  document.querySelector("main").innerHTML = `
  <section class="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-md-start d-flex align-items-center">
    <div class="container">
      <div class="d-sm-flex align-items-center justify-content-between">
        <div>
          <h1>Welcome to <span class="text-warning">The Book Shop</span></h1>
          <p class="lead my-4">
            Welcome to our online bookshop, where you can explore a wide selection of captivating books and immerse yourself in new worlds. Browse our collection and discover your next favorite read today!
          </p>
          <button class="btn btn-primary btn-lg">Start Shopping</button>
        </div>
        <img src="img/readers.png" alt="" class="img-fluid w-50 d-none d-md-block">
      </div>
    </div>
  </section>`
}

export { loadHome }