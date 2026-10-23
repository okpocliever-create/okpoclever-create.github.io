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
const contactForm = document.querySelector('[data-email-form]');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    // Team enquiry inbox.
    const email = 'okpoclevertom@gmail.com';
    const subject = encodeURIComponent('Book marketing enquiry: ' + (data.get('name') || 'Website visitor'));
    const body = encodeURIComponent(
      'Name: ' + data.get('name') + '\\nEmail: ' + data.get('email') +
      '\\nAuthor / book: ' + (data.get('book') || 'Not provided') +
      '\\nService: ' + data.get('service') + '\\n\\nProject details:\\n' + data.get('message')
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
}
