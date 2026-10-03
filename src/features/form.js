import { url } from "./fetch.js";
import { weatherData } from "./fetch.js";

const locationInput = document.querySelector("#location");
const locationButton = document.querySelector(".locationButton");
const dialogBox = document.querySelector("#dialogBox");
const exitButton = document.querySelector(".exit");
const submitButton = document.querySelector(".submit");
const convertTempBtn = document.querySelector(".tempToggleBtn");
let inputValue = locationInput.value;

locationButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialogBox.showModal();
});

exitButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialogBox.close();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialogBox.close();
});
let itsFarenhiet = true;
let itsCelsius = false;

convertTempBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let displayedTemp = weatherData.currentTemp;

  if (itsFarenhiet) {
    displayedTemp = (displayedTemp - 32) * (5 / 9);
    document.querySelector(".temp").innerText = displayedTemp;
    itsFarenhiet = false;
    itsCelsius = true;
  } else if (itsCelsius) {
    document.querySelector(".temp").innerText = weatherData.currentTemp;
    itsFarenhiet = true;
    itsCelsius = false;
  }
});
