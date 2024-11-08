//Fitness.html
// Scroll to the forms section when clicking Reserve or Register buttons
document.querySelectorAll('.register-btn, .reserve-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.form-container form').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const registrationForm = document.querySelector('.form-container form'); // First form
const reservationForm = document.querySelectorAll('.form-container form')[1]; // Second form

// Event listener for Registration Form
registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    const registrationData = {
        name, phone, email, course
    };

    registrationForm.reset();
    alert("Thank you for registering!");
});

// Event listener for Room Reservation Form
reservationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const resName = document.getElementById('res-name').value;
    const resPhone = document.getElementById('res-phone').value;
    const resEmail = document.getElementById('res-email').value;
    const date = document.getElementById('date').value;

    const reservationData = {
        name: resName, phone: resPhone, email: resEmail, date
    };

    reservationForm.reset();
    alert("Room reservation submitted successfully!");
});

// Modal view for images
document.querySelectorAll('.bordered-image').forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';

        const largeImg = document.createElement('img');
        largeImg.src = image.src;
        largeImg.style.maxWidth = '90%';
        largeImg.style.maxHeight = '90%';
        largeImg.style.borderRadius = '10px';
        largeImg.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';

        modal.appendChild(largeImg);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    });
});