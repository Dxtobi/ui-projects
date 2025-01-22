// @ts-ignore
function setDynamicGradientBackground({ elementSelector, gradientColors, direction = '135deg', type = 'linear' }) {
    const element = document.querySelector(elementSelector);
    if (!element) {
        console.error('Element not found');
        return;
    }

    // Create the gradient string
    const gradientType = type === 'radial' ? 'radial-gradient' : 'linear-gradient';
    const gradientString = `${gradientType}(${direction}, ${gradientColors.join(', ')})`;

    // Set initial background
    element.style.background = gradientString;
    element.style.backgroundSize = '200%';
    element.style.transition = 'background-position 0.1s ease-out';

    // Listen for mousemove and update the background position
    document.addEventListener('mousemove', (e) => {
        const { clientX: x, clientY: y } = e;

        // Calculate the percentage of the mouse position within the window
        const xPercent = (x / window.innerWidth) * 100;
        const yPercent = (y / window.innerHeight) * 100;

        // Update background position based on mouse movement
        element.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    });
}

// // Example usage:
// setDynamicGradientBackground({
//     elementSelector: '.gradient-background',
//     gradientColors: ['#ff7e5f', '#feb47b'],
//     direction: '135deg',  // Change this to any angle for linear, or leave empty for radial
//     type: 'linear'        // Options: 'linear' or 'radial'
// });