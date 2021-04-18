const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listUl = document.querySelector('#ingredients')

const newMass = ingredients.map(value => {
const newLi = document.createElement('li');
newLi.textContent = value;
    newLi.classList.add('gror')
    return newLi
})
listUl.append(...newMass);