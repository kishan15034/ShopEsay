const cartItemsContainer = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  cartCount.innerText = `Cart (${cart.length})`;
}

function displayCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPrice.innerText = "Total: ₹0";
    updateCartCount();
    return;
  }

  let total = 0;

  cart.forEach((product, index) => {
    const price = parseInt(product.price.replace(/[^0-9]/g, ""));
    total += price;

    const item = document.createElement("div");
    item.classList.add("product-card");

    item.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="add-to-cart" onclick="removeItem(${index})">
        Remove
      </button>
    `;

    cartItemsContainer.appendChild(item);
  });

  totalPrice.innerText = `Total: ₹${total.toLocaleString()}`;
  updateCartCount();
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

document.getElementById("checkout-btn").addEventListener("click", () => {

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  const total = cart.reduce((sum, product) => {
    return sum + parseInt(product.price.replace(/[^0-9]/g, ""));
  }, 0);

  const newOrder = {
    orderId: Date.now(),
    products: cart,
    total: total,
    date: new Date().toLocaleDateString(),
    status: "Order Placed"
  };

  orders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(orders));

  localStorage.removeItem("cart");

  cart = [];

  displayCart();

  alert("Order placed successfully! 🎉");

  window.location.href = "orders.html";
});

displayCart();