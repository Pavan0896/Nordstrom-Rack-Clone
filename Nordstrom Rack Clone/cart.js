var buy_list = JSON.parse(localStorage.getItem("buy-list"));
console.log(buy_list);

var purchase_list = JSON.parse(localStorage.getItem("purchase-list")) || [];

var totalCost = 0;

var buy_item = document.getElementById("cartItem");

buy_list.forEach(function (e, i) {
  var buyDiv = document.createElement("div");
  buyDiv.setAttribute("id", "buyDiv");
  var card1 = document.createElement("img");
  card1.src = e.imageUrl;

  var descDiv = document.createElement("div");
  var prodName = document.createElement("h4");
  prodName.innerText = e.productName;
  var description = document.createElement("p");
  description.innerText = e.description;

  var prodPrice = document.createElement("h4");
  prodPrice.innerText = e.productPrice;

  var stringNumber = String(e.productPrice);
  var num = parseFloat(stringNumber.replace(/[^\d.]/g, ""));

  totalCost = totalCost + num;

  var delbtn = document.createElement("button");
  delbtn.setAttribute("id", "del");
  delbtn.innerText = "Remove";
  delbtn.addEventListener("click", () => {
    buyDiv.remove();
    buy_list.splice(i, 1);
    localStorage.setItem("buy-list", JSON.stringify(buy_list));
    location.reload();
  });

  descDiv.append(prodName, description);
  buyDiv.append(card1, descDiv, prodPrice, delbtn);
  buy_item.append(buyDiv);
});

totalCost = totalCost.toFixed(2);

var itemsCount = document.querySelector("#total h6");
itemsCount.innerText = `Total items in bag :- ${buy_list.length}`;

var itemsTotal = document.querySelector("#total h3");
itemsTotal.innerText = `Total Amount :- $${totalCost}`;

var buy_now = document.querySelector("#total button");

// buy_now.addEventListener("click",()=>{
//   location.href = "./signIn.html"
// });

buy_now.addEventListener("click", () => {
  var sign = JSON.parse(localStorage.getItem("sign-in")) || [];

  if (sign != "") {
    location.href = "./purchases.html";
    purchase_list.push(buy_list);
    localStorage.setItem("purchase-list", JSON.stringify(purchase_list));
    buy_list = [];
    localStorage.setItem("buy-list", JSON.stringify(buy_list));
    var cartItem = document.getElementById("cartItem");
    cartItem.innerHTML = "";
    var itemsTotal = document.querySelector("#total h6");
    itemsTotal.innerText = "Total items in bag :- 0";

    var totalCost = document.querySelector("#total h3");
    totalCost.innerText = "Total Amount :- $0.00";
  } else {
    location.href = "./signIn.html";
  }
});

var sign = JSON.parse(localStorage.getItem("sign-in"));

sign.forEach(function (e) {
  var sign = document.querySelector("#signin ul li > a");
  sign.innerText = `Hi ${e.user}`;
});
