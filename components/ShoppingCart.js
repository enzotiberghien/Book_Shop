import { CartItem } from "../components/CartItem.js";
import { $, $all } from "../utils/querySelector.js";

const ShoppingCart = () => {
  return `
  <div class="overlay"></div>
        <div id="shopping-cart" class="">
          <h2>Your Shopping Cart</h2>
          <div id="products"></div>
          <h3>Total: <span id="total"></span> SEK</h3>
          <button class=" btn btn-primary btn-lg w-75">Checkout</button
        </div>
      </div>  
    `
}

const addEventsToCart = () => {
  const cartBtn = $("#shopping-cart-btn")
  cartBtn.addEventListener("click", () => {
    $(".overlay").classList.remove("reverse");
    $(".overlay").style.display = "block"
    $("#shopping-cart").classList.remove("reverse");
    $("#shopping-cart").style.display = "flex"
    calculateTotal()

    $(".overlay").onclick = () => {
      $(".overlay").classList.toggle('reverse');
      $("#shopping-cart").classList.toggle('reverse');
    }
  })
}


let cartItems = []; // create an array to store the cart items

const addToCart = (book) => {
  // Check if the book is already in the cart
  let bookExists = false;
  for (let i = 0; i < cartItems.length; i++) {
    if (book["title"] === cartItems[i].title) {
      console.log("Book already exists");
      cartItems[i].quantity += 1; // increment the quantity of the book in the cart
      bookExists = true;
      break;
    }
  }
  if (bookExists) {
    renderCartItems(); // re-render the cart items
    return;
  }

  cartItems.push({ ...book, quantity: 1 });
  renderCartItems();
};


const renderCartItems = () => {
  let cartHTML = "";
  cartItems.forEach(item => { 
    cartHTML += CartItem(item);
  });
  $("#products").innerHTML = cartHTML;

  $all(".decrement-btn").forEach(e => {
    e.addEventListener("click", () => {
      const sum = parseInt(e.parentElement.querySelector(".cart-sum").textContent);
      console.log(sum);
      if (sum - 1 === 0) e.parentElement.parentElement.parentElement.remove();
      else e.parentElement.querySelector(".cart-sum").textContent = sum - 1;
      calculateTotal();
    });
  });
  $all(".increment-btn").forEach(e => {
    e.addEventListener("click", () => {
      const sum = parseInt(e.parentElement.querySelector(".cart-sum").textContent);
      console.log(sum);
      e.parentElement.querySelector(".cart-sum").textContent = sum + 1;
      calculateTotal();
    });
  });
};


const calculateTotal = () => {
  let sum = 0;
  $all(".cart-price").forEach(e => {
    sum += parseInt(e.textContent) * parseInt(e.parentElement.querySelector(".cart-sum").textContent)
  })
  $("#total").textContent = sum
}


export { ShoppingCart, addEventsToCart, addToCart }