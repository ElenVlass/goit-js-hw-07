const counterValueEl = document.querySelector('#value')
const decrementCounterBtn = document.querySelector('[data-action="decrement"]')
const incrementCounterBtn = document.querySelector('[data-action="increment"]');

let counter = 0;

incrementCounterBtn.addEventListener('click', () => {
    counter += 1;
    counterValueEl.textContent = counter;
})

decrementCounterBtn.addEventListener('click', () => {
    counter -= 1;
    counterValueEl.textContent = counter;
})
