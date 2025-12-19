const form = document.getElementById('contactForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  message.textContent = 'Заявка отправлена!';
});