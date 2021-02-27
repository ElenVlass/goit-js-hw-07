const rangeEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

textEl.style.fontSize = '16px';
rangeEl.min = 12;

rangeEl.addEventListener('input', handleFontSizeChange)
rangeEl.addEventListener('change', handleFontSizeChange);

function handleFontSizeChange(event) {
   textEl.style.fontSize = event.target.value+'px';
    console.log(event.target.value+'px');
    console.log(textEl.style.fontSize);
}
