// Function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle scroll event
function handleScroll() {
  var card = document.querySelector('.card');
  if (isElementInViewport(card)) {
    card.classList.add('slide-in');
    window.removeEventListener('scroll', handleScroll); // Remove the event listener once the card is visible
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

const open = document.querySelector(".mob-open");
const close = document.querySelector(".mob-close");

const wrapper = document.querySelector(".mob-wrapper");

open.addEventListener("click", () => {
  wrapper.classList.toggle("opened");
  wrapper.classList.toggle("close");
});

close.addEventListener("click", () => {
  wrapper.classList.toggle("opened");
  wrapper.classList.toggle("close");
});
