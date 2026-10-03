const apiKey = "P2UWZJT7M635N9HTMKU69NYXG";
const location = "London,UK";
let weatherData;

// Correct endpoint and parameter
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

await fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error("HTTP error: " + response.status);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    weatherData = {
        address : data.address,
        resolvedAddress : data.resolvedAddress,
        timezone : data.timeZone,
        description : data.description,
        currentTemp : data.currentConditions.temp,

    };
  })
  .catch((error) => console.error("Error fetching weather:", error));

  console.log(weatherData);
