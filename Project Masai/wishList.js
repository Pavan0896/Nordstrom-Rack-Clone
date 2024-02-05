var wish_list = JSON.parse(localStorage.getItem("wish-list"));
var buy_list = JSON.parse(localStorage.getItem("buy-list"));
// console.log(buy_list);

var buy_item = document.getElementById("cartItem");

wish_list.forEach(function (e, i) {
  var buyDiv = document.createElement("div");
  buyDiv.setAttribute("id", "buyDiv");
  var card1 = document.createElement("img");
  card1.src = e.imageUrl;

  var descDiv = document.createElement("div");
  var prodName = document.createElement("h4");
  prodName.innerText = e.productName;

  var prodDesc = document.createElement("p");
  prodDesc.innerText = e.description;

  var prodPrice = document.createElement("h4");
  prodPrice.innerText = e.productPrice;

  var btn = document.createElement("a");
  btn.href = "#";
  var buyBtn = document.createElement("button");
  buyBtn.innerText = "Add to Bag";
  buyBtn.addEventListener("click", () => {
    buy_list.push(e);
    buyDiv.remove();
    wish_list.splice(i, 1);
    localStorage.setItem("wish-list", JSON.stringify(wish_list));
    localStorage.setItem("buy-list", JSON.stringify(buy_list));
    location.reload();
  });

  var delbtn = document.createElement("button");
  delbtn.setAttribute("id", "del");
  delbtn.innerText = "Remove";
  delbtn.addEventListener("click", () => {
    buyDiv.remove();
    wish_list.splice(i, 1);
    localStorage.setItem("wish-list", JSON.stringify(wish_list));
    location.reload();
  });

  btn.append(buyBtn);
  descDiv.append(prodName, prodDesc);
  buyDiv.append(card1, descDiv, prodPrice, btn, delbtn);
  buy_item.append(buyDiv);
});

var sign = JSON.parse(localStorage.getItem("sign-in"));

sign.forEach(function (e) {
  var sign = document.querySelector("#signin ul li > a");
  sign.innerText = `Hi ${e.user}`;
});
