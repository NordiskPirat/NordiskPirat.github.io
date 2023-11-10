const baseURL = "https://NordiskPirat.github.io/wdd230/";
const linksURL = "data/links.json";
const menu = document.querySelector("#courseLinks");

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.lessons);
}
const displayLinks = (weeks) => {
  weeks.forEach((week) => {
    let assignment = document.createElement("li");
    assignment.textContent = `Week ${week.lesson}: `;
    week.links.forEach((link) => {
      let individual = document.createElement("a");
      individual.textContent = `${link.title} `;
      individual.setAttribute("target", "_blank");
      individual.setAttribute("href", `${link.url}`);
      assignment.appendChild(individual);
    });
    menu.appendChild(assignment);
  });
};
getLinks();
