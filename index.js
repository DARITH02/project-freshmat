const user = document.querySelector(".onclick");
const noneClick = document.querySelector(".none-click");
// const Onclick = document.querySelector(".user-click");
var i = 0;
user.addEventListener("click", function () {
  if (i === 0) {
    noneClick.className = "user-click";
    i = 1;
  } else {
    noneClick.className = "none-click";
    i = 0;
  }
});
