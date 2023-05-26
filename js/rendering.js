import { generatePosts } from './data.js';

const pictureContainer = document.querySelector('#picture').content;

const pictureItem = pictureContainer.querySelector('.picture');

const pictures = document.querySelector('.pictures');

const fragment = document.createDocumentFragment();

const dataList = generatePosts();

for(let i = 0; i < dataList.length; i++) {
  const element = pictureItem.cloneNode(true);
  element.classList.add('picture');

  const pictureImg = element.querySelector('.picture__img');
  const pictureComment = element.querySelector('.picture__comments');
  const pictureLike = element.querySelector('.picture__likes');

  pictureImg.src = dataList[i].url;
  pictureComment.textContent = dataList[i].comments;
  pictureLike.textContent = dataList[i].likes;
  fragment.appendChild(element);
}

pictures.appendChild(fragment);


export { };
