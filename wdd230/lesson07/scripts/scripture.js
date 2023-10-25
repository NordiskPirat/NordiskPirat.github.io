const input = document.querySelector("#favoritechapt");

const button = document.querySelector("button");

const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value == "") {
    alert("Cannot be blank.");
    input.focus();
  } else input.focus();
  const li = document.createElement("li");
  const deletebutton = document.createElement("button");
  li.textContent = input.value;
  deletebutton.textContent = "❌";
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener("click", () => {
    list.removeChild(list.firstChild);
    input.focus();
  });
  input.focus();
  input.value = "";
});
