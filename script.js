// Mobile menu toggle logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Contact form simulation feedback
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formSuccess.classList.remove('hidden');
        contactForm.reset();

        setTimeout(() => {
            formSuccess.classList.add('hidden');
        }, 4000);
    });
}