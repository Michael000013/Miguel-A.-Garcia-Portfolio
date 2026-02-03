// Simple JS for navigation and contact form
document.addEventListener('DOMContentLoaded', function () {
  // Highlight current nav link
  const links = document.querySelectorAll('.site-nav a');
  links.forEach(link => {
    if (link.href === window.location.origin + window.location.pathname) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // Contact form handler (client-side only)
  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById('form-status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) {
        status.textContent = 'Please fill out all fields.';
        status.style.color = 'crimson';
        return;
      }

      // Simulate form submission
      status.style.color = 'green';
      status.textContent = 'Thanks — your message was sent (demo only).';
      form.reset();
    });
  }
});