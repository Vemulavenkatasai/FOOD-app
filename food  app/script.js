let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  cartItems.innerHTML = "";
  total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price} `;
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => removeFromCart(index);
    
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = total;
}

function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty. Please add some items first.");
  } else {
    alert("🎉 Your order has been placed successfully!");
    cart = [];
    updateCart();  // ✅ Fixed here
  }
}

function cancelOrder() {
  if (cart.length === 0) {
    alert("Cart is already empty.");
  } else {
    const confirmCancel = confirm("Are you sure you want to cancel the order?");
    if (confirmCancel) {
      cart = [];
      updateCart();  // ✅ Fixed here
      alert("❌ Your order has been canceled.");
    }
  }
}

