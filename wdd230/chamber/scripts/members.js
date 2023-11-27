const url = "data/members.json";
const cards = document.querySelector("#cards");

async function getInformation() {
  const response = await fetch(url);
  console.log(response);
  if (response.ok) {
    const data = await response.json();
    console.table(data);
    displayDirectory(data.members);
  } else {
    console.log(response.status);
  }
}

const displayDirectory = (members) => {
  members.forEach((member) => {
    let chamberMemberCard = document.createElement("section");
    let name = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let image = document.createElement("img");

    image.setAttribute("src", member.image);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "400");
    image.setAttribute("height", "450");

    name.textContent = `${member.name}`;
    p1.textContent = `${member.address}`;
    p2.textContent = `${member.phone}`;
    p4.textContent = `${member.membershipLevel} Level`;
    chamberMemberCard.appendChild(name);
    chamberMemberCard.appendChild(image);
    chamberMemberCard.appendChild(p1);
    chamberMemberCard.appendChild(p2);
    chamberMemberCard.appendChild(p3);
    chamberMemberCard.appendChild(p4);

    chamberMemberCard.classList.add("directory");
    cards.append(chamberMemberCard);
  });
};

getInformation();

const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const display = document.querySelector("#cards");

list.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

grid.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});
