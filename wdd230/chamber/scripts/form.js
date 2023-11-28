var slider = document.getElementById("levelSlider");
var levelDisplay = document.getElementById("levelDisplay");

function getLevelLabel(level) {
  switch (level) {
    case "1":
      return "Non-Profit";
    case "2":
      return "Bronze";
    case "3":
      return "Silver";
    case "4":
      return "Gold";
    default:
      return "Non-Profit";
  }
}

levelDisplay.innerHTML = "Membership Level: " + getLevelLabel(slider.value);

slider.oninput = function () {
  levelDisplay.innerHTML = "Membership Level: " + getLevelLabel(this.value);
};

function getCurrentTimestamp() {
  var now = new Date();
  var year = now.getFullYear();
  var month = String(now.getMonth() + 1).padStart(2, "0");
  var day = String(now.getDate()).padStart(2, "0");
  var hours = String(now.getHours()).padStart(2, "0");
  var minutes = String(now.getMinutes()).padStart(2, "0");
  var seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

document.getElementById("timestamp").value = getCurrentTimestamp();
