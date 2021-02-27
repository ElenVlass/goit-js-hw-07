const controlContainerEl = document.querySelector('#controls');
const inputNumberOfBoxesEl = document.querySelector('[type = "number"]');
const makeBoxesEl = document.querySelector('[data-action="render"]');
const removeBoxesEl = document.querySelector('[data-action="destroy"]');

// console.log(controlContainerEl);
// console.dir(inputNumberOfBoxesEl);
// console.dir(inputNumberOfBoxesEl.value);
// console.log(makeBoxesEl);
// console.log(removeBoxesEl);


inputNumberOfBoxesEl.addEventListener('input', handleInputChange)
makeBoxesEl.addEventListener('click', createBoxes)
removeBoxesEl.addEventListener('click', destroyBoxes)

let boxes = [];
let amountBoxes = 0;

// for (let i = 0; i <= amountBoxes; i += 1) {
// const boxEl = document.createElement('div');
// boxEl.style.backgroundColor = 'tomato'; // как сделать случайный цвет фона??
//     boxEl.style.width = 30 + i * 10 + 'px';
// boxEl.style.height = 30 + i * 10 + 'px';
// boxEl.classList.add('box');
//     console.log(boxEl);
//     boxes.push(boxEl);
// }
// console.log(boxes);

function handleInputChange(event) {
    amountBoxes = +event.currentTarget.value;
    console.log(event.currentTarget.value);
}

function createBoxes(amount) {
    amount = amountBoxes;
    for (let i = 0; i <= amountBoxes; i += 1) {
const boxEl = document.createElement('div');
boxEl.style.backgroundColor = 'tomato'; // как сделать случайный цвет фона??
    boxEl.style.width = 30 + i * 10 + 'px';
boxEl.style.height = 30 + i * 10 + 'px';
boxEl.classList.add('box');
    console.log(boxEl);
    boxes.push(boxEl);
}
controlContainerEl.append(...boxes);

};

function destroyBoxes() {
    boxes = [];
}
