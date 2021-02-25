const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.getElementById('ingredients');

const createIngredientsList = products => {
return products.map(product => {
    const productItem = document.createElement('li');
    productItem.textContent = product;

    return productItem;
})
}
const ingredientItems = createIngredientsList(ingredients);

ingredientsList.append(...ingredientItems);