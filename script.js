// Existing hamburger menu code
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Navbar scroll background change
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
