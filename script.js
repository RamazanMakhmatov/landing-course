document.addEventListener("DOMContentLoaded", function () {

  const ctaBtn = document.getElementById("ctaBtn");
  const contactBtn = document.getElementById("contactBtn");

  if (ctaBtn) {
    ctaBtn.addEventListener("click", function () {
      alert("Заявка отправлена!");
    });
  }

  if (contactBtn) {
    contactBtn.addEventListener("click", function () {
      alert("Мы свяжемся с вами!");
    });
  }

});