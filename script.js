// Classes.html
// Membership selection alert
document.querySelectorAll('.membership-card button').forEach(button => {
    button.addEventListener('click', () => {
        const membershipType = button.parentElement.querySelector('h3').textContent;
        alert(`You have selected the ${membershipType} membership.`);

        // Display selected membership in the registration form
        document.getElementById('selectedMembership').value = membershipType;

        // Update martial arts options based on membership type
        updateMartialArtsOptions(membershipType);
    });
});

function updateMartialArtsOptions(membershipType) {
    const martialArtSelect = document.getElementById('martialArtSelect');
    const options = martialArtSelect.querySelectorAll('option');

    // Enable or disable options based on membership type
    options.forEach(option => {
        if (membershipType === 'JUNIOR Membership') {
            // Only allow kids' martial arts for Junior Membership
            if (option.value.startsWith('kids-')) {
                option.disabled = false;
            } else {
                option.disabled = true;
            }
        } else {
            // Allow regular martial arts for other memberships
            if (option.value.startsWith('kids-')) {
                option.disabled = true;
            } else {
                option.disabled = false;
            }
        }
    });
}

// Class Registration Form Submission
const form = document.querySelector('.class-registration form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data from each input field
    const name = form.querySelector('input[placeholder="Name"]').value;
    const membership = document.getElementById('selectedMembership').value;
    const martialArt = form.querySelector('select').value;
    const email = form.querySelector('input[type="email"]').value;
    const phoneNumber = form.querySelector('input[placeholder="Phone Number"]').value;
    const age = form.querySelector('input[placeholder="Age"]').value;

    // Create an object to store the form data
    const formData = {
        name, membership, martialArt, email, phoneNumber, age
    };

    console.log(formData);  // Log form data for debugging or further processing

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

