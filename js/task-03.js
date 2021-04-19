const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryLi = document.querySelector('#gallery')
galleryLi.setAttribute('style', 'display: flex; list-style: none')

// //<=====================Первый вариант======================>
// const mapMap = info => {
//     return images.map(ttt => {
//         galleryLi.insertAdjacentHTML('afterbegin',
//             `<li class=mar><img class=col src=${ttt.url} alt=${ttt.alt}></li>`)
//         return galleryLi
//     })
//     };
// mapMap(images);



//<====================Второй вариант======================>
const funcAddImages = value => {
    
    return images.map(value => {
        const listAdd = document.createElement('li')
        listAdd.classList.add('mar')

        const imagesListAdd = document.createElement('img')
        imagesListAdd.src = value.url;
        imagesListAdd.alt = value.alt;
        imagesListAdd.width = 150;
        imagesListAdd.height = 150;

    

        listAdd.appendChild(imagesListAdd)
        return listAdd
    })
}
const result = funcAddImages(images)
galleryLi.append(...result)

//<===========================================================>


