const locationInput = document.querySelector("#location");
const locationButton = document.querySelector(".locationButton");
const dialogBox = document.querySelector("#dialogBox");
const exitButton = document.querySelector(".exit");
const submitButton = document.querySelector(".submit");
let inputValue = locationInput.value;

locationButton.addEventListener("click", () => {
  dialogBox.showModal();
});

exitButton.addEventListener("click", () => {
  dialogBox.close();
});

submitButton.addEventListener("click",() => {
    dialogBox.close();
   
});
 console.log(inputValue);

np