const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  // Update button emoji/icon
  toggleBtn.textContent = body.classList.contains('light-mode') ? '🌙 Theme' : '☀️ Theme';
});
