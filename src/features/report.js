import { weatherData } from "./fetch.js";

document.querySelector(".address").innerText = weatherData.address;
document.querySelector(".timezone").innerText = weatherData.timezone;
document.querySelector(".description").innerText = weatherData.description;
document.querySelector(".temp").innerText = weatherData.currentTemp;
