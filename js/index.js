let buttonText = document.getElementById("buttonText");
let inputText = document.getElementById("inputText");

buttonText.addEventListener("click", function () {
  localStorage.setItem("inputText", inputText.value);
});
