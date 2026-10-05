import { getWeather } from "./updateReport.js";

const locationInput = document.querySelector("#location");
const locationButton = document.querySelector(".locationButton");
const dialogBox = document.querySelector("#dialogBox");
const exitButton = document.querySelector(".exit");
const submitButton = document.querySelector(".submit");
const convertTempBtn = document.querySelector(".tempToggleBtn");
if (locationInput.value === null) {locationInput.value = "hyderabad"};

locationButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialogBox.showModal();
});

exitButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialogBox.close();
});

let itsFarenhiet = true;

let tempInCelsius;
let tempInFarenheit = await getWeather(locationInput.value);

submitButton.addEventListener("click", async (e) => {
  tempInFarenheit = await getWeather(locationInput.value.trim());
  document.querySelector(".temp").innerText = `${tempInFarenheit.toFixed(1)} °F`;
  e.preventDefault();
  dialogBox.close();
});

convertTempBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (itsFarenhiet) {
    tempInCelsius = (tempInFarenheit - 32) * (5 / 9);
    document.querySelector(".temp").innerText = `${tempInCelsius.toFixed(1)} °C`;
    itsFarenhiet = false;
  } else {
    document.querySelector(".temp").innerText = `${tempInFarenheit.toFixed(1)} °F`;
    itsFarenhiet = true;
  }
});
