const newLocalSettings = {
    max: 25, // max tilt rotation (degrees (deg))
    perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
    scale: 1.1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
    speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
    easing: "cubic-bezier(.03,.98,.52,.99)"
};
const default_settings = newLocalSettings;
/**
 * @typedef {{ max: number; perspective: number; scale: number; speed: number; easing: string; }} Options
 */

/**
 * @param {string} selector
 * @param {{ max: number; perspective: number; scale: number; speed: number; easing: string; }} options
 */
export function tiltCard(selector, options = default_settings) {
    /**
       * @param {Event} e
       * @param {HTMLElement} elem
       */
    const cards = document.querySelectorAll(selector);

    cards.forEach(card => {
        card.addEventListener("mouseenter", (event) => cardMouseEnter(event, options));
        // @ts-ignore
        card.addEventListener("mousemove", (event) => cardMouseMove(event, options));
        // @ts-ignore
        card.addEventListener("mouseleave", (event) => cardMouseLeave(event, options));
    });

}

/**
* @param {any} event;
 * @param {{ max: number; perspective: number; scale: number; speed: number; easing: string; }} options
*/
function cardMouseEnter(event, options) {
    setTransition(event, options);
}

/**
* @param {{ currentTarget: any; clientX: number; clientY: number; }} event;
 * @param {{ max: number; perspective: number; scale: number; speed: number; easing: string; }} options

*/
function cardMouseMove(event, options) {
    const card = event.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth / 2;
    const centerY = card.offsetTop + cardHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped = (+1) * options.max * mouseY / (cardHeight / 2);
    const rotateYUncapped = (-1) * options.max * mouseX / (cardWidth / 2);
    const rotateX = rotateXUncapped < -options.max ? -options.max :
        (rotateXUncapped > options.max ? options.max : rotateXUncapped);
    const rotateY = rotateYUncapped < -options.max ? -options.max :
        (rotateYUncapped > options.max ? options.max : rotateYUncapped);

    card.style.transform = `perspective(${options.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                            scale3d(${options.scale}, ${options.scale}, ${options.scale})`;
}

/**
* @param {{ currentTarget: { style: { transform: string; }; }; }} event
@param {{ max: number; perspective: number; scale: number; speed: number; easing: string; }} options
*/
function cardMouseLeave(event, options) {
    event.currentTarget.style.transform = `perspective(${options.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(event, options);
}

/**
* @param {{ currentTarget: any; }} event
@param {{ max: number; perspective: number; scale: number; speed: number; easing: string; }} options
*/
function setTransition(event, options) {
    const card = event.currentTarget;
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${options.speed}ms ${options.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
        card.style.transition = "";
    }, options.speed);
}