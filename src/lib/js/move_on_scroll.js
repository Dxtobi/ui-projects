

// /**
//  * @param {string} elm
//  */
// export function move_on_scroll(elm) {
//     const div = document.querySelector(elm);

//     // Variable to store the last scroll position
//     let lastScrollPosition = 0;

//     // Listen for scroll events on the window
//     window.addEventListener('scroll', () => {
//         // Determine the scroll direction
//         const scrollDown = window.scrollY > lastScrollPosition;

//         // Calculate the desired x translation based on the scroll direction
//         let xPosition = scrollDown ? -window.scrollY : window.scrollY; // Moves left on scroll down, right on scroll up

//         // Apply the translation to the div
//         if (div) {
//             // @ts-ignore
//             div.style.transform = `translateX(${xPosition}px)`;
//         }

//         // Update the last scroll position
//         lastScrollPosition = window.scrollY;
//     });
// }

/**
 * Moves the element on scroll with smooth animation.
 * @param {string} elm - The selector for the element to move.
 * @param {string} primaryDirection - The primary direction of movement ('left' or 'right').
 */
export function move_on_scroll(elm, primaryDirection = 'left') {
    const div = document.querySelector(elm);

    // Apply smooth transition using CSS
    // @ts-ignore
    div.style.transition = 'transform 3.5s ease-out';

    // Variable to store the last scroll position
    let lastScrollPosition = 0;

    // Listen for scroll events on the window
    window.addEventListener('scroll', () => {
        // Determine the scroll direction
        const scrollDown = window.scrollY > lastScrollPosition;

        // Calculate the desired x translation based on the scroll direction and primary direction
        let xPosition = scrollDown ? (primaryDirection === 'left' ? -window.scrollY : window.scrollY) : (primaryDirection === 'left' ? window.scrollY : -window.scrollY);

        // Apply the translation to the div
        if (div) {
            // @ts-ignore
            div.style.transform = `translateX(${xPosition % window.innerWidth}px)`;
        }

        // Update the last scroll position
        lastScrollPosition = window.scrollY;
    });

 
    
}
