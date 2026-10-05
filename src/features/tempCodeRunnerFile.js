ySelector(".temp").innerText = `${tempInFarenheit.toFixed(1)} °F`;
  e.preventDefault();
  dialogBox.close();
});

convertTempBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (itsFarenhiet) {
    tempInCelsius = (tempInFarenheit - 32) * (5 / 9);
    document.querySelector(".temp").innerText = `${