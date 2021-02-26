const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputBlur);

function handleInputBlur(event) {
    if (event.currentTarget.value.length === +inputRef.dataset.length)
    {
        inputRef.classList.add('valid');
        if (inputRef.classList.contains('invalid')) { inputRef.classList.remove('invalid') }
    }
    else {
        inputRef.classList.add('invalid');
        if (inputRef.classList.contains('valid'))
    { inputRef.classList.remove('valid') } };
}
 