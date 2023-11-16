const banner = document.querySelector("#banner");
const span = document.querySelector("#hide");

const date = new Date();
let day = date.getDay();
if (day > 0 && day < 4) {
  banner.style.display = "block";
}
span.onclick = function () {
  banner.style.display = "none";
};
