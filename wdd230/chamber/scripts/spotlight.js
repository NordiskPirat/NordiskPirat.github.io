const url = "data/members.json";
const spotlightCards = document.querySelector("#spotlightCards");

async function getInformation() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.table(data);
      displaySpotlight(data.members);
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

const displaySpotlight = (members) => {
  const filteredMembers = members.filter(
    (member) =>
      member.membershipLevel === "Gold" || member.membershipLevel === "Silver"
  );

  const shuffledMembers = shuffleArray(filteredMembers);

  shuffledMembers
    .slice(0, Math.min(3, shuffledMembers.length))
    .forEach((member) => {
      let chamberMemberCard = document.createElement("section");
      let name = document.createElement("h2");
      let p1 = document.createElement("p");
      let p2 = document.createElement("p");
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
      chamberMemberCard.appendChild(p4);

      chamberMemberCard.classList.add("directory");
      spotlightCards.append(chamberMemberCard);
    });
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

getInformation();
