const darkModeToggle = document.querySelector("#dark-mode-btn");
const lightModeToggle = document.querySelector("#light-mode-btn");
const form = document.querySelector("#form");
const signUpBtn = document.querySelector("#signUpBtn");

lightModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  form.style.backgroundColor = "white";
  darkModeToggle.classList.remove("activeMode");
  lightModeToggle.classList.add("activeMode");
  signUpBtn.classList.remove("specialBtn");
  signUpBtn.classList.add("darkBtn");
});

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  lightModeToggle.classList.remove("activeMode");
  darkModeToggle.classList.add("activeMode");
  form.style.backgroundColor = "transparent";
  signUpBtn.classList.remove("darkBtn");
});
