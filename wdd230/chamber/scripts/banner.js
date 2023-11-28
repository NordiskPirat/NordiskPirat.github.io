const frontbanner = document.querySelector("#frontbanner");
const span = document.querySelector("#remove");

span.onclick = function () {
  frontbanner.style.display = "none";
};

const date = new Date();
let day = date.getDay();
if (day > 0 && day < 4) {
  frontbanner.style.display = "block";
}
