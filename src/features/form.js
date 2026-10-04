import { getWeather } from "./updateReport.js";

const locationInput = document.querySelector("#location");
const locationButton = document.querySelector(".locationButton");
const dialogBox = document.querySelector("#dialogBox");
const exitButton = document.querySelector(".exit");
const submitButton = document.querySelector(".submit");
const convertTempBtn = document.querySelector(".tempToggleBtn");

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
  getWeather(locationInput.value.trim());
  tempInFarenheit = await getWeather(locationInput.value.trim());
  e.preventDefault();
  dialogBox.close();
});

convertTempBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (itsFarenhiet) {
    tempInCelsius = (tempInFarenheit - 32) * (5 / 9);
    document.querySelector(".temp").innerText = tempInCelsius;
    itsFarenhiet = false;
  } else {
    document.querySelector(".temp").innerText = tempInFarenheit;
    itsFarenhiet = true;
  }
});
