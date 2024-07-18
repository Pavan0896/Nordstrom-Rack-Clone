var purchaseList = JSON.parse(localStorage.getItem("purchase-list"));
console.log(purchaseList);

purchaseList.forEach((childArray) => {
  childArray.forEach(function (e) {
    var card = document.getElementById("card");

    var card1 = document.createElement("div");

    var cardImage = document.createElement("img");
    cardImage.src = e.imageUrl;

    var cardName = document.createElement("h4");
    cardName.innerText = e.productName;

    card1.append(cardImage, cardName);
    card.append(card1);
  });
});

var sign = JSON.parse(localStorage.getItem("sign-in"));

sign.forEach(function (e) {
  var sign = document.querySelector("#signin ul li > a");
  sign.innerText = `Hi ${e.user}`;
});


