import { isEscapeKey } from './util.js';

const fullScreenMode = document.querySelector('.big-picture');

const exitFullScreenMode = fullScreenMode.querySelector('.big-picture__cancel');

const photoCards = document.querySelectorAll('.pictures .picture');


const removeClassHidden = function() {
  fullScreenMode.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeyDown);
};

const addClassHidden = function() {
  fullScreenMode.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
};

function onDocumentKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    addClassHidden();
  }
}


for (let i = 0; i < photoCards.length; i++) {
  photoCards[i].addEventListener('click', removeClassHidden);
}
exitFullScreenMode.addEventListener('click', addClassHidden);


export { photoCards };
