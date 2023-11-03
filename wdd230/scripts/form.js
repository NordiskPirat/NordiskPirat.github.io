//------ Rating --------
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rate");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}

// ----------- Passwords don't match ----------
const p1 = document.querySelector("#pwd");
const p2 = document.querySelector("#repeatPassword");
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

function checkSame() {
  if (p1.value !== p2.value) {
    message.textContent = "Passwords do not match";
    message.style.visibility = "show";
    p2.value = "";
    p2.focus();
  } else {
    message.style.display = "none";
  }
}
