// Form Validation and Submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        alert('Thank you for your message, ' + nameInput.value + '! We will get back to you soon.');
        form.reset();
    });

    // Add hover effects for social media icons
    const socialIcons = document.querySelectorAll('.social-icons a img');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});
