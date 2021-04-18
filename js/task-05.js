const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', keyNum);

function keyNum(event) {
    span.textContent = event.currentTarget.value;
    if (span.textContent === '') {
        span.textContent = 'незнакомец';
    }
}