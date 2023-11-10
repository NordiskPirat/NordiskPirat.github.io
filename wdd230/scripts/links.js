const baseURL = "https://nordiskpirat.github.io/wdd230";
const linksurl = "data/links.json";
const linkMenu = document.querySelector("#courseLinks");

async function getLinkData() {
  const response = await fetch(linksurl);
  const data = await response.json();
  displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    let assignment = document.createElement("li");
    assignment.textContent = `Week ${week.lesson}: `;
    week.links.forEach((link) => {
      let individual = document.createElement("a");
      individual.setAttribute("href", `${link.url}`);
      individual.setAttribute("target", "_blank");
      individual.textContent = `${link.title} `;
      assignment.appendChild(individual);
    });
    linkMenu.appendChild(assignment);
  });
};

getLinkData();
