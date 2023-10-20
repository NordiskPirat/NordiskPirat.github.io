function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 50 && windSpeed > 3.0) {
    var windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * temperature * Math.pow(windSpeed, 0.16);

    windChill = Math.round(windChill * 10) / 10;

    return windChill;
  } else {
    return "N/A";
  }
}

function calculateAndDisplayWindChill() {
  var temperatureInput = document.getElementById("temperatureInput");
  var windSpeedInput = document.getElementById("windSpeedInput");

  var temperature = parseFloat(temperatureInput.value);
  var windSpeed = parseFloat(windSpeedInput.value);

  var windChillElement = document.getElementById("windChill");

  var windChill = calculateWindChill(temperature, windSpeed);

  windChillElement.innerText =
    "Wind Chill: " +
    (typeof windChill === "number" ? windChill + "°F" : windChill);
}
