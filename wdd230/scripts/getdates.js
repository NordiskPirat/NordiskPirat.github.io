const date = new Date(document.lastModified);
document.getElementById("datemodified").innerHTML = date;

const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;