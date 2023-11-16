const currentTemperature = document.querySelector("#current-temperature");
const weatherIcon = document.querySelector("#weather-icon");
const captionDescription = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=60.67&lon=17.14&units=imperial&appid=5ca64a6668640238da33c5f031410a87";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function displayResults(data) {
  let i = 0;
  let item = data.list[i];
  currentTemperature.innerHTML = `${Math.trunc(item.main.temp)} &deg;F`;

  const iconsrc = `https://openweathermap.org/img/w/${item.weather[i].icon}.png`;
  let desc = item.weather[i].description;
  weatherIcon.setAttribute("src", iconsrc);
  captionDescription.innerHTML = `${desc}`;
  i = i + 8;
  while (i < 25) {
    let loopItem = data.list[i];
    let comingTemperature = document.createElement("div");
    comingTemperature.setAttribute("class", "temperature");
    let icon = document.createElement("img");
    const newIcon = `https://openweathermap.org/img/w/${loopItem.weather[0].icon}.png`;
    icon.setAttribute("src", newIcon);
    comingTemperature.innerHTML = `${Math.trunc(loopItem.main.temp)} &deg;F`;
    weatherForecast.appendChild(icon);
    weatherForecast.appendChild(comingTemperature);

    i = i + 8;
  }
}
