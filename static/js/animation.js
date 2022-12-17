const sweepers = document.querySelectorAll(".explore__btn");
const explores = document.querySelectorAll(".explore__img__content");
const texts = document.querySelectorAll(".flex__box__lg__text__content");
var sweeperNav = function (manual) {
  sweepers.forEach((sweeper) => {
    sweeper.classList.remove("active")
  });

  explores.forEach((explore) => {
    explore.classList.remove("active")
  });

  texts.forEach((text) => {
    text.classList.remove("active")
  });

  sweepers[manual].classList.add("active");
  explores[manual].classList.add("active");
  texts[manual].classList.add("active");
}

sweepers.forEach((sweeper, i) => {
  sweeper.addEventListener("click", () => {
    sweeperNav(i);
  });
});

// Select the first element in the "sweepers" array as the starting point
let currentIndex = 0;

// Set the interval for how often the code should scroll to the next element
const interval = 7000; // 7000 ms = 7 seconds

// Use the setInterval function to repeatedly call the "sweeperNav" function
setInterval(() => {
  // Increment the current index and wrap around to 0 if it exceeds the length of the "sweepers" array
  currentIndex = (currentIndex + 1) % sweepers.length;

  // Call the "sweeperNav" function with the current index
  sweeperNav(currentIndex);
}, interval);







const containerElements = document.querySelectorAll('.animation__flex__box__container');

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}

for (let i = 0; i < containerElements.length; i++) {
  const element = containerElements[i];
  const liElement = element.querySelector('li');
  const originalInput = parseInt(liElement.innerHTML.slice(0, -1));

  let count = 70;
  let interval;
  window.addEventListener('scroll', () => {
    if (isScrolledIntoView(element) && !interval) {
      interval = setInterval(() => {
        liElement.innerHTML = `${count}%`;
        count++;
  
        if (count >= originalInput) {
          clearInterval(interval);
          liElement.innerHTML = `${originalInput}%`;
          interval = null;
        }
      }, 100);
    }
  });
}
