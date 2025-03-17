const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = 'rgba(255, 228, 196, 0.5)'
        button.style.transition = 'background-color 0.2s ease'
        button.style.cursor = 'pointer'
    })

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '';
        button.style.transition = 'background-color 0.2s ease'
        button.style.cursor = 'default'
    });
});