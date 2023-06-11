// import { dataList } from './data.js';

// // Контейнер для изображений других поьзователей
// const picturesList = document.querySelector('.pictures');
// // Изображения
// const pictureCards = picturesList.querySelectorAll('.picture');
// // Полноэкранный режим
// const fullScreenMode = document.querySelector('.big-picture');
// // Блок с ссылкой на изображение
// const pictureSurce = fullScreenMode.querySelector('.big-picture__img img');
// // Выход из полноэкранного режима
// const exitFullScreenMode = fullScreenMode.querySelector('.cancel');
// // Блок с инофрмацией
// const socialLike = fullScreenMode.querySelector('.social__likes span');


// const removeClassSection = function(section) {
//   section.classList.remove('hidden');
// };

// const addHandlerOnPic = function(picture, dataPiture) {
//   picture.addEventListener('click', () => {
//     removeClassSection(fullScreenMode);
//     pictureSurce.src = dataPiture.url;
//   });
// };

// const closeHendlerOnPic = function(cancel) {
//   cancel.addEventListener('click', () => {
//     fullScreenMode.classList.add('hidden');
//   });
// };

// const addCommentsFullScreen = function(dataCount) {
//   socialLike.textContent = dataCount.likes;
// };

// for (let i = 0; i <= pictureCards.length; i++) {
//   addHandlerOnPic(pictureCards[i], dataList[i]);
//   closeHendlerOnPic(exitFullScreenMode);
//   addCommentsFullScreen(pictureCards[i] );
// }


// export {};

// const picturesList = document.querySelector('.pictures');

// const pictureCards = picturesList.querySelectorAll('.picture');

// const fullScreenMode = document.querySelector('.big-picture');

// const exitFullScreenMode = fullScreenMode.querySelector('.cancel');

// const onPopupEscKeyDown = function(evt) {
//   if (event.codeKey === 'Escape') {
//     evt.preventDefault();
//     addClassHidden(fullScreenMode);
//   }
// };

// function removeClassHidden(element) {
//   element.classList.remove('hidden');
// }

// function addClassHidden(element) {
//   element.classList.add('hidden');
// }

// function addHandlerCloseOnEsc(evt) {
//   document.addEventListener('keydown', onPopupEscKeyDown(evt));
// }

// function removeHandlerCloseOnEsc(evt) {
//   document.removeEventListener('keydown', onPopupEscKeyDown(evt));
// }


// const addHandlerOnPictures = function(openElement) {
//   openElement.addEventListener('click', () => {
//     removeClassHidden(fullScreenMode);
//   });
//   addHandlerCloseOnEsc();
// };

// const addHendlerOnExit = function(closeElement) {
//   closeElement.addEventListener('click', () => {
//     addClassHidden(fullScreenMode);
//   });
//   removeHandlerCloseOnEsc();
// };

// addHendlerOnExit(exitFullScreenMode);

// for (let i = 0; i <= pictureCards.length; i++) {
//   addHandlerOnPictures(pictureCards[i]);
// }


// // document.addEventListener('keydown', onPopupEscKeyDown());
// // document.removeEventListener('keydown', onPopupEscKeyDown());
