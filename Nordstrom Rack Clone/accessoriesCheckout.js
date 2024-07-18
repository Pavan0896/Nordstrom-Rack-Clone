var check_out = JSON.parse(localStorage.getItem("check-out")) || [];
var buy_list = JSON.parse(localStorage.getItem("buy-list")) || [];
var wish_list = JSON.parse(localStorage.getItem("wish-list")) || [];

var container = document.getElementById("insideContainer");
var div1 = document.createElement("div");
div1.setAttribute("id", "div1");

var card1 = document.createElement("img");
card1.src = check_out.image1URL;

var card2 = document.createElement("img");
card2.src = check_out.image2URL;

var div2 = document.createElement("div");
div2.setAttribute("id", "div2");
var prodName = document.createElement("h3");
prodName.innerText = check_out.productName;

var prodPrice = document.createElement("h5");
prodPrice.innerText = check_out.productPrice;

var desc = document.createElement("p");
desc.innerText = check_out.description;

var cartAnchor = document.createElement("a");
cartAnchor.href = "cart.html";
var cart = document.createElement("button");
cart.setAttribute("id", "buy");
cart.innerText = "Add to Bag";
cart.addEventListener("click", () => {
  buy_list.push(check_out);
  localStorage.setItem("buy-list", JSON.stringify(buy_list));
});

var wishListAnchor = document.createElement("a");
wishListAnchor.href = "wishList.html";
var wishList = document.createElement("button");
wishList.innerText = "Add to Wish List";
wishList.addEventListener("click", () => {
  wish_list.push(check_out);
  localStorage.setItem("wish-list", JSON.stringify(wish_list));
});

div1.append(card1, card2);
cartAnchor.append(cart);
wishListAnchor.append(wishList);
div2.append(prodName, prodPrice, desc, cartAnchor, wishListAnchor);
container.append(div1, div2);

var sign = JSON.parse(localStorage.getItem("sign-in"));

sign.forEach(function (e) {
  var sign = document.querySelector("#signin ul li > a");
  sign.innerText = `Hi ${e.user}`;
});
