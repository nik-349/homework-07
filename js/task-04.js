const decrementRef = document.querySelector('[data-action="decrement"]')
const incrementRef = document.querySelector('[data-action="increment"]')
const valueCount = document.querySelector('#value')
let counterValue = 0;

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);


function decrement() {
      counterValue -= 1
    valueCount.textContent = counterValue;
    };

function increment() {
      counterValue += 1
    valueCount.textContent = counterValue;
    };