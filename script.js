const cartCount = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-to-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
    cartCount.innerText = `Cart (${cart.length})`;
}

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const productCard = button.parentElement;

        const product = {
            name: productCard.querySelector("h3").innerText,
            price: productCard.querySelector("p").innerText,
            image: productCard.querySelector("img").src
        };

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert(product.name + " added to cart! 🛒");
    });

});

updateCartCount();