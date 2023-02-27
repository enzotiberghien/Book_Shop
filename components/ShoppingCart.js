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
    $(".overlay").style.display = "block"
    $("#shopping-cart").style.display = "flex"
    calculateTotal()

    $(".overlay").onclick = () => {
      $(".overlay").style.display = "none"
      $("#shopping-cart").style.display = "none"
    }
  })
}

const addToCart = (bookStr) => {
  console.log(bookStr)
  const book = bookStr
  // Add itemsto the Shopping Cart
  $("#products").innerHTML += `
  ${CartItem(book)}
  `

  // Add events listeners to the cart items btns
  $all(".decrement-btn").forEach(e => {
    const tempPrice = parseInt(e.parentElement.parentElement.querySelector(".cart-product-price").textContent)
    e.addEventListener("click", () => {
      const sum = parseInt(e.parentElement.querySelector(".mx-2").textContent);
      console.log(sum)
      if (sum - 1 === 0) e.parentElement.parentElement.parentElement.innerHTML = ""
      e.parentElement.querySelector(".mx-2").textContent = sum - 1;
      let price = e.parentElement.parentElement.querySelector(".cart-product-price")
      console.log(price)
      price.textContent = tempPrice * (sum - 1)
      calculateTotal()
    })
  })
  $all(".increment-btn").forEach(e => {
    const tempPrice = parseInt(e.parentElement.parentElement.querySelector(".cart-product-price").textContent)
    e.addEventListener("click", () => {
      const sum = parseInt(e.parentElement.querySelector(".mx-2").textContent);
      console.log(sum)
      e.parentElement.querySelector(".mx-2").textContent = sum + 1;
      let price = e.parentElement.parentElement.querySelector(".cart-product-price")
      price.textContent = tempPrice * (sum + 1)
      calculateTotal()
    })
  })
}


// Calculate total of shopping cart
const calculateTotal = () => {
  let sum = 0;
  $all(".cart-price").forEach(e => {
    sum += parseInt(e.textContent)
  })
  $("#total").textContent = sum
}


export { ShoppingCart, addEventsToCart, addToCart }