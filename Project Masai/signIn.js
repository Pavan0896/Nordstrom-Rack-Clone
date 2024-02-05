var sign_in = JSON.parse(localStorage.getItem("sign-in")) || [];

var btn = document.querySelector("#signIn form");
btn.addEventListener("submit", () => {
    event.preventDefault();
    location.href = "./index.html"
  var email = document.getElementById("email");

  var userName = document.getElementById("userName");

  let obj = {
    email: email.value,
    user: userName.value,
  };
  sign_in.push(obj);
  localStorage.setItem("sign-in", JSON.stringify(sign_in));
});
