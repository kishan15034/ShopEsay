
const watches =[
  {
    name: "Classic Analog Watch",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    name: "Silver Steel Watch",
    price: "₹1,999",
    image: "https://th.bing.com/th?id=OPAC.x8%2b5lz9UJ0Ejcw474C474&w=658&h=658&qlt=100&o=5&dpr=1.3&pid=21.1"
  },
  {
    name: "Brown Leather Watch",
    price: "₹1,799",
    image: "https://cdna.lystit.com/photos/0d4e-2014/06/05/fossil--machine-mid-size-chronograph-brown-leather-mens-watch-product-1-20596990-1-925972306-normal.jpeg"
  },
  {
    name: "Digital Sports Watch",
    price: "₹2,299",
    image: "https://tse1.mm.bing.net/th/id/OIP.o4wh5DykWKSfnmSkXTIU_gHaKw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  
];
const shoes = [
  {
    name: "Nike Running Shoe",
    price: "₹2999",
    image: "https://th.bing.com/th/id/OPAC.OHxrnlfkjccBvg474C474?w=380&h=380&o=5&dpr=1.3&pid=21.1"
  },
  {
    name: "Adidas Sport Shoe",
    price: "₹3499",
    image: "https://th.bing.com/th/id/OPAC.wXOvyCHPKdqhWg474C474?w=380&h=380&o=5&dpr=1.3&pid=21.1"
  },
  {
    name: "Casual Sneakers",
    price: "₹1999",
    image: "https://th.bing.com/th?id=OPAC.qs%2fnSAnbRSYBbA474C474&w=300&h=300&o=5&dpr=1.3&pid=21.1"
  },
  {
    name: "Walking Shoes",
    price: "₹2499",
    image: "https://th.bing.com/th?id=OPAC.%2BiiikqZVt2J0iA474C474&w=380&h=380&o=5&dpr=1.3&pid=21.1"
  },
  
];
const tshirts = [
  {
    name: "Men's Casual T-Shirt",
    price: "₹799",
    image: "https://th.bing.com/th/id/OIP.Mk6kvMD02XtvXcOu46pj4QHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    name: "Classic Black T-Shirt",
    price: "₹599",
    image: "data:image/webp;base64,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"
  },
  {
    name: "White Cotton T-Shirt",
    price: "₹699",
    image: "https://th.bing.com/th/id/OIP.swTZibN11rMQLTlvpW-xhAHaJ3?w=208&h=277&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    name: "Oversized T-Shirt",
    price: "₹899",
    image: "https://th.bing.com/th/id/OIP.kN52e9SkKo1j06eWVz5vuAHaKB?w=208&h=282&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  
];
const headphones = [
  {
    name: "Wireless Headphones",
    price: "₹1999",
    image: "https://th.bing.com/th/id/OIP.t8cjDKOGDWdwAEbpu8FlJgHaHa?w=145&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    name: "Bass Pro Headphones",
    price: "₹2499",
    image: "https://th.bing.com/th/id/OIP.7ea-oFIoJ35xprU6NYg3DAHaHa?w=200&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    name: "Noise Cancelling Headphones",
    price: "₹3999",
    image: "https://th.bing.com/th/id/OIP.ZEyoXNIw8haxW-gEKAWR7AHaIs?w=164&h=192&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  {
    name: "Gaming Headset",
    price: "₹2799",
    image: "https://th.bing.com/th/id/OIP.-SJ_sMiHUQjeh3ySfkk4lQHaHU?w=188&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  },
  
];


const cartCount = document.getElementById("cart-count");
const searchInput = document.getElementById("search");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function updateCartCount() {
  cartCount.innerText = `Cart (${cart.length})`;
}

function displayProducts(items, containerId) {
  const container = document.getElementById(containerId);

  container.innerHTML = "";

  items.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;

    const button = card.querySelector(".add-to-cart");

    button.addEventListener("click", () => {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert(`${product.name} added to cart!`);
    });

    container.appendChild(card);
  });
}
displayProducts(watches, "watch-list");
displayProducts(shoes, "shoe-list");
displayProducts(tshirts, "tshirt-list");
displayProducts(headphones, "headphone-list");


searchInput.addEventListener("input", () => {

  const searchValue = searchInput.value.toLowerCase().trim();

  if (searchValue === "") {
    displayProducts(watches, "watch-list");
    displayProducts(shoes, "shoe-list");
    displayProducts(tshirts, "tshirt-list");
    displayProducts(headphones, "headphone-list");

    document.getElementById("watch-title").style.display = "block";
    document.getElementById("shoe-title").style.display = "block";
    document.getElementById("tshirt-title").style.display = "block";
    document.getElementById("headphone-title").style.display = "block";

    return;
  }

  const filteredWatches = watches.filter(product =>
    product.name.toLowerCase().includes(searchValue)
  );

  const filteredShoes = shoes.filter(product =>
    product.name.toLowerCase().includes(searchValue)
  );

  const filteredTshirts = tshirts.filter(product =>
    product.name.toLowerCase().includes(searchValue)
  );

  const filteredHeadphones = headphones.filter(product =>
    product.name.toLowerCase().includes(searchValue)
  );

  displayProducts(filteredWatches, "watch-list");
  displayProducts(filteredShoes, "shoe-list");
  displayProducts(filteredTshirts, "tshirt-list");
  displayProducts(filteredHeadphones, "headphone-list");

  document.getElementById("watch-title").style.display =
    filteredWatches.length ? "block" : "none";

  document.getElementById("shoe-title").style.display =
    filteredShoes.length ? "block" : "none";

  document.getElementById("tshirt-title").style.display =
    filteredTshirts.length ? "block" : "none";

  document.getElementById("headphone-title").style.display =
    filteredHeadphones.length ? "block" : "none";
});


console.log("Search JS is working");


