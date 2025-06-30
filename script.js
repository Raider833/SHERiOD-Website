// Mobile navigation toggle (for future responsive nav)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Smooth scroll to top on page load (optional)
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Example placeholder for future: Add to cart interaction
const cartButtons = document.querySelectorAll('.btn-secondary');

cartButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const product = e.target.closest('.product-card');
    const name = product.querySelector('h3').textContent;
    alert(`You're viewing ${name} — product options coming soon.`);
    // In future: redirect to product details page
    // window.location.href = 'iphone-16.html';
  });
});
