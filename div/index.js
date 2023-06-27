const darkModeToggle = document.querySelector("#dark-mode-btn");
const lightModeToggle = document.querySelector("#light-mode-btn");
const form = document.querySelector("#form");
const btnDark = document.querySelector(".btnDark");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  form.classList.add("transparent");
  lightModeToggle.classList.remove("activeMode");
  darkModeToggle.classList.add("activeMode");
  //   btnDark.classList.remove("btnDark");
  //   btnDark.classList.add("specialBtn");
});

lightModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
  darkModeToggle.classList.remove("activeMode");
  lightModeToggle.classList.add("activeMode");
  form.classList.remove("transparent");
});
