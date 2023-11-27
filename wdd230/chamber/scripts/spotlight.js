const jsonUrl = "data/members.json";
const spotlightCards = document.querySelector("#spotlightCards");

async function getSpotlightInformation() {
  try {
    const response = await fetch(jsonUrl);
    if (response.ok) {
      const data = await response.json();
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
      let p3 = document.createElement("p");
      let image = document.createElement("img");

      image.setAttribute("src", member.image);
      image.setAttribute("loading", "lazy");
      image.setAttribute("width", "200");
      image.setAttribute("height", "200");

      name.textContent = `${member.name}`;
      p1.textContent = `${member.address}`;
      p2.textContent = `${member.phone}`;
      p3.textContent = `${member.membershipLevel} Level`;
      chamberMemberCard.appendChild(name);
      chamberMemberCard.appendChild(image);
      chamberMemberCard.appendChild(p1);
      chamberMemberCard.appendChild(p2);
      chamberMemberCard.appendChild(p3);

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

getSpotlightInformation();
