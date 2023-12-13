const currentTemperature = document.querySelector("#current-temperature");
const currentHumidity = document.querySelector("#current-humidity");
const weatherSign = document.querySelector("#weather-sign");
const captionDescription = document.querySelector("figcaption");
const forecastTemperature = document.querySelector("#forecast-temperature");
const forecastWeatherSign = document.querySelector("#forecast-weather-sign");
const forecastDescription = document.querySelector("#forecast-description");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?lat=20.50&lon=-86.92&units=imperial&appid=5ca64a6668640238da33c5f031410a87";

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
  // Display current weather information
  let currentWeather = data.list[0];
  currentTemperature.innerHTML = `Current Temperature: ${Math.trunc(
    currentWeather.main.temp
  )} &deg;F`;
  currentHumidity.innerHTML = `Current Humidity: ${currentWeather.main.humidity}%`;

  const iconsrc = `https://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`;
  let desc = currentWeather.weather[0].description;
  weatherSign.setAttribute("src", iconsrc);
  captionDescription.innerHTML = `Current Weather: ${desc}`;

  // Find the next day's forecast at 15:00 (3:00 pm)
  let nextDayForecast = data.list.find(
    (item) => new Date(item.dt_txt).getHours() === 15
  );

  if (nextDayForecast) {
    forecastTemperature.innerHTML = `Forecasted Temperature at 3:00pm: ${Math.trunc(
      nextDayForecast.main.temp
    )} &deg;F`;
    const forecastIcon = `https://openweathermap.org/img/w/${nextDayForecast.weather[0].icon}.png`;
    forecastWeatherSign.setAttribute("src", forecastIcon);
    forecastDescription.innerHTML = `Forecasted Weather: ${nextDayForecast.weather[0].description}`;
  } else {
    forecastTemperature.innerHTML = "No forecast available";
  }
}
