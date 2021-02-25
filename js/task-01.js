const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item')

console.log(`В списке ${categoriesItems.length} категории.`);

categoriesItems.forEach(item => {
    console.log('Категория: ', item.firstElementChild.textContent);
    console.log('Количество элементов: ', item.lastElementChild.children.length);
});