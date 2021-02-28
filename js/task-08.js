const boxesContainerEl = document.querySelector('#boxes');
const inputNumberOfBoxesEl = document.querySelector('[type = "number"]');
const makeBoxesEl = document.querySelector('[data-action="render"]');
const removeBoxesEl = document.querySelector('[data-action="destroy"]');


let amountBoxes = 0;
inputNumberOfBoxesEl.addEventListener('input', (event) => {
    amountBoxes = +event.currentTarget.value;
})
inputNumberOfBoxesEl.addEventListener('input', () => {
    makeBoxesEl.addEventListener('click', createBoxes);});
removeBoxesEl.addEventListener('click', destroyBoxes)
removeBoxesEl.addEventListener('click', () => {
    makeBoxesEl.removeEventListener('click', createBoxes);});

function createBoxes(amount) {
    let boxes = [];
    amount = amountBoxes;
    for (let i = 0; i < amountBoxes; i += 1) {
const boxEl = document.createElement('div');
boxEl.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
boxEl.style.width = 30 + i * 10 + 'px';
boxEl.style.height = 30 + i * 10 + 'px';
boxEl.classList.add('box');
    boxes.push(boxEl);
}
boxesContainerEl.append(...boxes);
};

function destroyBoxes() {
    boxesContainerEl.innerHTML = '';
}