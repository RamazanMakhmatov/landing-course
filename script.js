const contactBtn = document.getElementById("contactBtn");
const formWrapper = document.getElementById("formWrapper");

contactBtn.addEventListener("click", function () {
  formWrapper.classList.toggle("hidden");
});
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (nameInput.value === "" || phoneInput.value === "") {
    message.textContent = "❌ Заполните все поля";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Заявка отправлена!";
    message.style.color = "green";

    nameInput.value = "";
    phoneInput.value = "";
  }
});