// ===============================
// MY ORDERS
// ===============================

const ordersContainer = document.getElementById("orders-container");

// Get orders from localStorage
let orders = JSON.parse(localStorage.getItem("orders")) || [];


// ===============================
// DISPLAY ORDERS
// ===============================

function displayOrders() {

    // Check container
    if (!ordersContainer) {
        console.error("orders-container not found!");
        return;
    }

    // Clear old orders
    ordersContainer.innerHTML = "";


    // ===============================
    // NO ORDERS
    // ===============================

    if (orders.length === 0) {

        ordersContainer.innerHTML = `
            <div class="empty-orders">

                <p>You have no orders yet. 🛍️</p>

                <a href="products.html">
                    Start Shopping
                </a>

            </div>
        `;

        return;
    }


    // ===============================
    // DISPLAY ORDERS
    // LATEST ORDER FIRST
    // ===============================

    orders.slice().reverse().forEach((order) => {

        const orderCard = document.createElement("div");

        orderCard.classList.add("order-card");


        // ===============================
        // ORDER INFORMATION
        // ===============================

        orderCard.innerHTML = `

            <h3>
                Order #${order.orderId}
            </h3>

            <p>
                <strong>Date:</strong> ${order.date}
            </p>

            <p>
                <strong>Status:</strong> ${order.status}
            </p>

            <div class="order-products">

                ${order.products.map((product) => `

                    <div class="order-product">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                        >

                        <div>

                            <h4>
                                ${product.name}
                            </h4>

                            <p>
                                ${product.price}
                            </p>

                        </div>

                    </div>

                `).join("")}

            </div>

            <h3 class="order-total">
                Total: ₹${Number(order.total).toLocaleString("en-IN")}
            </h3>

        `;


        // Add order card to page
        ordersContainer.appendChild(orderCard);

    });
}


// ===============================
// RUN FUNCTION
// ===============================

displayOrders();