const elemLi = document.querySelectorAll('.item')
console.log(` В списке ${elemLi.length} категории.`)

elemLi.forEach(element => {
    console.log(` Категория: ${element.children[0].textContent}`)
    console.log(` Количество элементов: ${element.children[1].children.length}`)

});



// const itemEl = document.querySelectorAll('.item');
// console.log(`В списке ${itemEl.length} категории.`);

// itemEl.forEach((category) => {
//   console.log(`Категория: ${category.children[0].textContent}`);
//   console.log(`Количество элементов: ${category.children[1].children.length}`);
// });