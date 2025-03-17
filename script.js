const buttons = document.querySelectorAll('.button');
const contentWindows = document.querySelectorAll('.content');

// Set default active button and content
let activeTargetID = 'about-me';

let activeButton = document.querySelector(`.button#${activeTargetID}`);
let activeContent = document.querySelector(`.content#${activeTargetID}`);

// Highlight the default active button
activeButton.style.transition = 'background-color 0.2s ease';
activeButton.style.backgroundColor = 'rgba(255, 228, 196, 0.7)';

// Show the default active content
activeContent.style.display = 'flex';

// Add event listeners to buttons
buttons.forEach(button => {
    // Add hover effects only for non-active buttons
    button.addEventListener('mouseenter', () => {
        if (button.id !== activeTargetID) {
            button.style.backgroundColor = 'rgba(255, 228, 196, 0.5)';
            button.style.transition = 'background-color 0.2s ease';
            button.style.cursor = 'pointer';
        }
    });

    button.addEventListener('mouseleave', () => {
        if (button.id !== activeTargetID) {
            button.style.backgroundColor = '';
            button.style.transition = 'background-color 0.2s ease';
            button.style.cursor = 'default';
        }
    });

    // Handle click events
    button.addEventListener('click', function () {
        if(button.id == 'github') {
            window.open('https://github.com/dencioras1', '_blank');
        }
        else if(button.id == 'linked-in') {
            window.open('https://linkedin.com/in/denas-hakuts-kozmianas', '_blank');
        }
        else if (button.id !== activeTargetID) {
            // Reset previous active button's background color
            activeButton.style.backgroundColor = '';

            // Hide previous active content
            activeContent.style.display = 'none';

            // Update active target ID
            activeTargetID = button.id;

            // Set new active button and content
            activeButton = document.querySelector(`.button#${activeTargetID}`);
            activeContent = document.querySelector(`.content#${activeTargetID}`);

            // Highlight the new active button
            activeButton.style.transition = 'background-color 0.2s ease';
            activeButton.style.backgroundColor = 'rgba(255, 228, 196, 0.7)';

            // Show the new active content
            activeContent.style.display = 'flex';


        }
    });
});
