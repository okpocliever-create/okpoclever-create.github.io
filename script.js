// Shared navigation and small portfolio interactions.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const filterButtons = document.querySelectorAll('[data-filter]');
const workCards = document.querySelectorAll('[data-category]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
  const selected = button.dataset.filter;
  workCards.forEach(card => card.hidden = !(selected === 'all' || card.dataset.category === selected));
}));
// Website contact form: sends enquiries through Web3Forms, without opening an email app.
const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  const status = contactForm.querySelector('[data-form-status]');
  const submitButton = contactForm.querySelector('button[type="submit"]');
  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const keyInput = contactForm.querySelector('input[name="access_key"]');
    const accessKey = keyInput ? keyInput.value.trim() : '';
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      if (status) status.textContent = 'The contact form is not connected yet. Please finish the Web3Forms setup before publishing this update.';
      return;
    }
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Sending…';
    }
    if (status) status.textContent = 'Sending your message…';
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      const result = await response.json();
      if (response.ok && result.success) {
        contactForm.reset();
        if (status) status.textContent = 'Thank you for contacting us. We will get back to you as soon as we can.';
      } else {
        if (status) status.textContent = result.message || 'Sorry, your message could not be sent. Please try again shortly.';
      }
    } catch (error) {
      if (status) status.textContent = 'We could not connect to the form service. Please check your internet connection and try again.';
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Send your enquiry';
      }
    }
  });
}
