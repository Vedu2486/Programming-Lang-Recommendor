/**
 * Add a class to an element and remove it after the animation completes
 * @param {HTMLElement} element - The element to animate
 * @param {string} animationClass - The CSS class that defines the animation
 * @param {number} duration - Duration in milliseconds
 * @returns {Promise} - Resolves when animation completes
 */
export function animateElement(element, animationClass, duration = 250) {
  return new Promise(resolve => {
    element.classList.add(animationClass);
    
    setTimeout(() => {
      element.classList.remove(animationClass);
      resolve();
    }, duration);
  });
}

/**
 * Animate the transition between two elements
 * @param {HTMLElement} currentElement - Element to animate out
 * @param {HTMLElement} nextElement - Element to animate in
 * @param {string} outClass - Animation class for the outgoing element
 * @param {string} inClass - Animation class for the incoming element
 * @param {number} duration - Duration in milliseconds
 */
export function animateTransition(currentElement, nextElement, outClass = 'fade-out', inClass = 'fade-in', duration = 250) {
  currentElement.classList.add(outClass);
  
  setTimeout(() => {
    currentElement.classList.remove(outClass);
    currentElement.style.display = 'none';
    
    nextElement.style.display = 'block';
    nextElement.classList.add(inClass);
    
    setTimeout(() => {
      nextElement.classList.remove(inClass);
    }, duration);
  }, duration);
}

/**
 * Apply staggered animations to a collection of elements
 * @param {NodeListOf<Element>} elements - Collection of elements to animate
 * @param {string} animationClass - Animation class to apply
 * @param {number} staggerDelay - Delay between each element's animation (ms)
 */
export function staggeredAnimation(elements, animationClass, staggerDelay = 75) {
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(animationClass);
    }, index * staggerDelay);
  });
}

/**
 * Create a typing animation effect for text
 * @param {HTMLElement} element - Element to contain the typing text
 * @param {string} text - Text to type
 * @param {number} speed - Typing speed in milliseconds per character
 * @returns {Promise} - Resolves when typing animation completes
 */
export function typeText(element, text, speed = 50) {
  return new Promise(resolve => {
    let index = 0;
    element.textContent = '';
    
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    }
    
    type();
  });
}