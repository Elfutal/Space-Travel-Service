//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
    const continueButton = document.querySelector('button[type="submit"]');
    const warningMessage = document.getElementById('warning-message');

    continueButton.addEventListener('click', function(event) {
        const selectedDestination = document.querySelector('input[name="destination"]:checked');
        if (!selectedDestination) {
            event.preventDefault(); // Prevent form submission
            warningMessage.style.display = 'block'; // Show warning message
        } else {
            warningMessage.style.display = 'none'; // Hide warning message if a selection is made
        }
    });
});
