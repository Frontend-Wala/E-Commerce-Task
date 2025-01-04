let total = 0;
function addToCart(name, price) {
total += price;
document.getElementById('total').innerText = total;

let cartList = document.getElementById('cart-list');
let listItem = document.createElement('li');
listItem.innerText = `${name} - ₹ ${price}`;
cartList.appendChild(listItem);
}

function checkout() {
    let today = new Date();
    let deliveryDate = new Date();
    deliveryDate.setDate(today.getDate() + 5);
    document.getElementById('delivery-date').innerText = `Expected delivery date: ${deliveryDate.toDateString()}`;
}