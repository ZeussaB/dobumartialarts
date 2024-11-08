// Modal view for facility and instructor images
document.querySelectorAll('.facilities-section img, .instructors-content img, .owner-content img').forEach(image => {
    image.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const largeImg = document.createElement('img');
        largeImg.src = image.src;
        largeImg.classList.add('modal-img');

        modal.appendChild(largeImg);
        document.body.appendChild(modal);

        // Close modal when clicked
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});