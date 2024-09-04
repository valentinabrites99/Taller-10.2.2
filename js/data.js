let inputText = localStorage.getItem("inputText");
let data = document.getElementById("data");

if (inputText) {
  data.innerText = inputText;
  localStorage.removeItem("inputText");
}
