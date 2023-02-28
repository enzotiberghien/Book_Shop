const CartItem = (item) => {
  const { coverImage, title, price, quantity } = item; // destructuring item object properties

  return `
    <div class="d-flex m-3 product cart-items">
      <img class="img-fluid w-25 mx-3" src="${coverImage}" alt="${title}">
      <div class="d-flex flex-column align-items-center justify-content-evenly">
        <h5 class="card-item-title">${title}</h5>
        <p class="cart-price"><span class="cart-product-price">${price}</span> SEK</p>
        <div class="d-flex align-items-center">
          <button class="decrement-btn btn btn-outline-secondary">-</button>
          <div class="mx-2 cart-sum">${quantity}</div>
          <button class="increment-btn btn btn-outline-secondary">+</button>
        </div>
      </div>
    </div>
  `;
};

export {CartItem}