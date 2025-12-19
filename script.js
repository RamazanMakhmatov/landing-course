const contactBtn = document.getElementById("contactBtn");
const formWrapper = document.getElementById("formWrapper");

contactBtn.addEventListener("click", function () {
  formWrapper.classList.toggle("hidden");
});