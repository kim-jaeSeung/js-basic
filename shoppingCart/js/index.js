const products = [
  { id: 1, name: "노트북", price: 1000 },
  { id: 2, name: "모니터", price: 200 },
  { id: 3, name: "마우스", price: 10 },
  { id: 4, name: "키보드", price: 50 },
  { id: 5, name: "이어폰", price: 5 },
];

let cart = [];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const totalQty = document.getElementById("total-qty");
const totalPrice = document.getElementById("total-price");

function renderProducts() {
  productList.innerHTML = "";
  products.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
    ${p.name} - $${p.price}원
     <button onclick=addToCart(${p.id})>추가하기</button> 
    `;
    productList.appendChild(div);
  });
}

function renderCart() {
  cartList.innerHTML = "";
  if (cart.length === 0) {
    cartList.innerHTML = "<p>장바구니가 비었습니다.</p>";
    return;
  } else {
    cart.forEach((item) => {
      const div = document.createElement("div");
      div.innerHTML = `
      ${item.name} - ${item.price}원 X ${item.qty}
      <button onclick="changeQty(${item.id}, 1)">+</button>
      <button onclick="changeQty(${item.id}, -1)">-</button>
      <button onclick=removeFromCart(${item.id})>삭제</button>
      `;
      cartList.appendChild(div);
    });
  }

  const qtySum = cart.reduce((sum, i) => sum + i.qty, 0);
  const priceSum = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  totalQty.textContent = qtySum;
  totalPrice.textContent = priceSum;
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const item = cart.find((i) => i.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
    renderCart();
  }
}

function changeQty(id, amount) {
  const item = cart.find((i) => i, id === id);
  if (!item) {
    return;
  }

  item.qty += amount;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  renderCart();
}

renderCart();
renderProducts();
