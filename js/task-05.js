const inputEl = document.querySelector('#name-input');
const outputUserName = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInputChange) 
 
function handleInputChange(event) {
outputUserName.textContent = event.currentTarget.value; 
    if (event.currentTarget.value === '')
  {outputUserName.textContent = 'незнакомец'}
}