import { dataList } from './data.js';

const pictureContainer = document.querySelector('#picture').content;

const pictureItem = pictureContainer.querySelector('.picture');

const fragment = document.createDocumentFragment();

const pictures = document.querySelector('.pictures');


function fillingСards() {
  for(let i = 0; i < dataList.length; i++) {
    const element = pictureItem.cloneNode(true);
    element.classList.add('picture');

    const pictureImg = element.querySelector('.picture__img');
    const pictureComment = element.querySelector('.picture__comments');
    const pictureLike = element.querySelector('.picture__likes');

    pictureImg.src = dataList[i].url;
    pictureComment.textContent = dataList[i].comments.length;
    pictureLike.textContent = dataList[i].likes;
    fragment.appendChild(element);
  }
  return fragment;
}

pictures.appendChild(fillingСards());

