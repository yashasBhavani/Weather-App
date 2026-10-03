import { apiKey } from "./fetch.js";

async function getWeather(location) {
  let link = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

  try {
    let response = await fetch(link);
    if (!response.ok)
      throw new Error(`Error is while reponding ${response.status}`);
    let data = await response.json();
    document.querySelector(".address").innerText = data.address;
    document.querySelector(".timezone").innerText = data.timezone;
    document.querySelector(".description").innerText = data.description;
    document.querySelector(".temp").innerText = data.currentConditions.temp;
  } catch (error) {
    console.error(`Error is while requesting ${error}`);
  }
}

export {getWeather};