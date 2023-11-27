async function loadSpotlightData() {
  try {
    const response = await fetch("members.json");
    const data = await response.json();

    const filteredMembers = data.members.filter(
      (member) => member.status === "gold" || member.status === "silver"
    );

    // Shuffle the array to display different members on each load
    const shuffledMembers = shuffleArray(filteredMembers);

    // Display spotlight information for the first two or three members
    const spotlightContainer = document.getElementById("spotlight-container");
    for (let i = 0; i < Math.min(3, shuffledMembers.length); i++) {
      const member = shuffledMembers[i];
      const memberElement = document.createElement("div");
      memberElement.textContent = `Name: ${member.name}, Status: ${member.status}`;
      spotlightContainer.appendChild(memberElement);
    }
  } catch (error) {
    console.error("Error loading spotlight data:", error);
  }
}

const memberElement = document.createElement("div");
memberElement.className = "spotlight-member";

memberElement.innerHTML = `
                    <h2>${member.name}</h2>
                    <p>Status: ${member.status}</p>
                `;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

window.onload = loadSpotlightData;
