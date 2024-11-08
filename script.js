// Classes.html
// Membership selection alert
document.querySelectorAll('.membership-card button').forEach(button => {
    button.addEventListener('click', () => {
        const membershipType = button.parentElement.querySelector('h3').textContent;
        alert(`You have selected the ${membershipType} membership.`);
    });
});

const form = document.querySelector('.class-registration form');


form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data from each input field
    const name = form.querySelector('input[placeholder="Name"]').value;
    const martialArt = form.querySelector('select').value;
    const email = form.querySelector('input[type="email"]').value;
    const phoneNumber = form.querySelector('input[placeholder="Phone Number"]').value;
    const age = form.querySelector('input[placeholder="Age"]').value;

    // Create an object to store the form data
    const formData = {
        name, martialArt, email, phoneNumber, age
    };

    form.reset();
    alert("Thank you for registering!");
});

// Timetable modal view
const timetableImg = document.querySelector('.timetable img');
timetableImg.addEventListener('click', () => {
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
    largeImg.src = timetableImg.src;
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

